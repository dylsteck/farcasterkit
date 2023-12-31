import { Router } from "express";
import { db } from "utils/kysely";
import { sql } from "kysely";
import { KyselyDB } from "types/database.t";

const router = Router();

router.get("/user", async (req, res) => {
  const { fid, fname } = req.query;
  const fidQuery = sql<KyselyDB['users']>`
    SELECT 
        *,
        CONCAT('0x', encode(custody_address, 'hex')) as custody_address
    FROM 
        users 
    WHERE 
        fid = CAST(${fid} AS bigint) 
    LIMIT 1;
`;

  const fnameQuery = sql<KyselyDB['users']>`
      SELECT 
          *,
          CONCAT('0x', encode(custody_address, 'hex')) as custody_address
      FROM 
          users 
      WHERE 
          fname = ${fname} 
      LIMIT 1;
  `;

  const user = fid ? await fidQuery.execute(db) : await fnameQuery.execute(db);
  return res.json({
    user: user.rows[0]
  });
});

export const UsersRouter = router;
