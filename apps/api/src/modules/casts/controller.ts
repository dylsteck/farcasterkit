import { Router } from "express";
import { db } from "clients/kysely";
import { sql } from "kysely";
import { KyselyDB } from "types/database.t";

const router = Router();

router.get("/casts/:hash", async (req, res) => {
  const { hash } = req.params;

  const hashAsHex = Buffer.from(hash.substring(2), 'hex').toString('hex');
  const castQuery = sql<KyselyDB['casts']>`
    SELECT 
        *,
        CONCAT('0x', encode(hash, 'hex')) as hash,
        CONCAT('0x', encode(parent_hash, 'hex')) as parent_hash,
        (SELECT value 
        FROM user_data 
        WHERE fid = casts.fid AND type = 1) as pfp
    FROM
        casts
    WHERE
        encode(hash, 'hex') = ${hashAsHex}
    LIMIT 1;
  `;
  const cast = await castQuery.execute(db);
  return res.json({
    cast: cast.rows[0]
  });
});

router.get("/casts/latest", async(req, res) => {
  console.log(req);
    // const { fid, parent_url, cursor, limit } = req.query;

    // const fidWhere = fid ? sql`WHERE fid = ${fid}` : sql``;
    // const parentUrlWhere = parent_url ? sql`WHERE parent_url = ${parent_url}` : sql``;
    // const validLimit = limit ? limit : `50`;
    const castsQuery = sql<KyselyDB['casts']>`
      SELECT 
          *,
          CONCAT('0x', encode(hash, 'hex')) as hash,
          CONCAT('0x', encode(parent_hash, 'hex')) as parent_hash,
          (SELECT value 
          FROM user_data 
          WHERE fid = casts.fid AND type = 1) as pfp
      FROM
          casts
      LIMIT 10;
    `;
    
    const cast = await castsQuery.execute(db);
    console.log(cast);
    return res.json({
      cast: cast.rows
    });
});

router.get("/casts/replies", async(req, res) => {
    const { parent_hash, cursor, limit } = req.query;

    const parentHashAsHex = Buffer.from(parent_hash.substring(2), 'hex').toString('hex');
    const castsQuery = sql<KyselyDB['casts']>`
      SELECT 
          *,
          CONCAT('0x', encode(hash, 'hex')) as hash,
          CONCAT('0x', encode(parent_hash, 'hex')) as parent_hash,
          (SELECT value 
          FROM user_data 
          WHERE fid = casts.fid AND type = 1) as pfp
      FROM
          casts
      WHERE
          encode(parent_hash, 'hex') = ${parentHashAsHex}
      LIMIT 10;
    `;
    
    const cast = await castsQuery.execute(db);
    console.log(cast);
    return res.json({
      cast: cast.rows
    });
});

export const CastsRouter = router;
