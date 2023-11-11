import { Router } from "express";
import { db } from "utils/kysely";
import { sql } from "kysely";
import { KyselyDB } from "types/database.t";

const router = Router();

router.get("/latest", async(req, res) => {
  const { fid, fname, parent_url, cursor, limit } = req.query;
  const fidWhere = fid ? sql`WHERE casts.fid = ${fid}` : sql``;
  const fnameWhere = fname ? sql`AND users.fname = ${fname}` : sql``;
  const parentUrlWhere = parent_url ? sql`WHERE casts.parent_url = ${parent_url}` : sql``;
  const validCursor = cursor ? cursor : `0`;
  const validLimit = limit && parseInt(limit as string) <= 50 ? limit : `50`;
  
  const castsQuery = sql<KyselyDB['casts']>`
    SELECT 
        casts.*,
        CONCAT('0x', encode(casts.hash, 'hex')) as hash,
        CONCAT('0x', encode(casts.parent_hash, 'hex')) as parent_hash,
        (SELECT value 
        FROM user_data 
        WHERE fid = casts.fid AND type = 1) as pfp,
        users.fname
    FROM
        casts
    INNER JOIN users ON casts.fid = users.fid
    ${fidWhere}
    ${parentUrlWhere}
    ${fnameWhere}
    ORDER BY casts.timestamp desc
    OFFSET ${validCursor}
    LIMIT ${validLimit};
   `;

  const cast = await castsQuery.execute(db);

  const prevCursor = parseInt(validCursor as string) - parseInt(validLimit as string);
  const finalPrevCursor = prevCursor >= 0 ? prevCursor : 0;

  return res.json({
      casts: cast.rows,
      nextCursor: parseInt(validCursor as string) + cast.rows.length,
      prevCursor: finalPrevCursor
  });
});

router.get("/replies", async(req, res) => {
    const { parent_hash, cursor, limit } = req.query;

    const parentHashAsHex = Buffer.from(typeof parent_hash === 'string' ? parent_hash.substring(2) : '0x', 'hex').toString('hex');
    const validCursor = cursor ? cursor : `0`;
    const validLimit = limit && parseInt(limit as string) <= 50 ? limit : `50`;
    const castsQuery = sql<KyselyDB['casts']>`
        SELECT 
            casts.*,
            CONCAT('0x', encode(casts.hash, 'hex')) as hash,
            CONCAT('0x', encode(casts.parent_hash, 'hex')) as parent_hash,
            users.fname,
            (SELECT value 
            FROM user_data 
            WHERE fid = casts.fid AND type = 1) as pfp
        FROM
            casts
        INNER JOIN users ON casts.fid = users.fid
        WHERE
            encode(casts.parent_hash, 'hex') = ${parentHashAsHex}
        OFFSET ${validCursor}
        LIMIT ${validLimit};
    `;
    
    const cast = await castsQuery.execute(db);
    const prevCursor = parseInt(validCursor as string) - parseInt(validLimit as string);
    const finalPrevCursor = prevCursor >= 0 ? prevCursor : 0;

    return res.json({
        casts: cast.rows,
        nextCursor: parseInt(validCursor as string) + cast.rows.length,
        prevCursor: finalPrevCursor
    });
});

router.get("/search", async(req, res) => {
  const { query, cursor, limit } = req.query;
  const validLimit = limit && parseInt(limit as string) <=50 ? limit : `50`;
  const validCursor = cursor ? cursor : `0`;
  const castsQuery = sql<KyselyDB['casts']>`
    SELECT 
        c.*,
        CONCAT('0x', encode(c.hash, 'hex')) as hash,
        CONCAT('0x', encode(c.parent_hash, 'hex')) as parent_hash,
        u.fname,
        ud.value as pfp
    FROM
        casts c
    INNER JOIN users u ON c.fid = u.fid
    LEFT JOIN user_data ud ON ud.fid = c.fid AND ud.type = 1
    WHERE
        c.text @@ to_tsquery('english', ${query})
    ORDER BY c.timestamp desc
    OFFSET ${validCursor}
    LIMIT ${validLimit};
  `;
  
  const cast = await castsQuery.execute(db);
  const prevCursor = parseInt(validCursor as string) - parseInt(validLimit as string);
  const finalPrevCursor = prevCursor >= 0 ? prevCursor : 0;

  return res.json({
      casts: cast.rows,
      nextCursor: parseInt(validCursor as string) + cast.rows.length,
      prevCursor: finalPrevCursor
  });
});

router.get("/:hash", async (req, res) => {
  const { hash } = req.params;

  const hashAsHex = Buffer.from(hash.substring(2), 'hex').toString('hex');
  const castQuery = sql<KyselyDB['casts']>`
    SELECT 
        casts.*,
        CONCAT('0x', encode(casts.hash, 'hex')) as hash,
        CONCAT('0x', encode(casts.parent_hash, 'hex')) as parent_hash,
        users.fname,
        (SELECT value 
        FROM user_data 
        WHERE fid = users.fid AND type = 1) as pfp
    FROM
        casts
    INNER JOIN users ON casts.fid = users.fid
    WHERE
        encode(casts.hash, 'hex') = ${hashAsHex}
    LIMIT 1;
    `;
  const cast = await castQuery.execute(db);
  return res.json({
    cast: cast.rows[0]
  });
});

export const CastsRouter = router;
