import { Router } from "express";
import { db } from "utils/kysely";
import { sql } from "kysely";
import { KyselyDB } from "types/database.t";

const router = Router();

router.get("/user", async (req, res) => {
  const { fid, fname } = req.query;
  const fidQuery = sql<KyselyDB['users']>`SELECT * from users where fid = CAST(${fid} AS bigint) LIMIT 1`;
  const fnameQuery = sql<KyselyDB['users']>`SELECT * from users where fname = ${fname} LIMIT 1`;

  const user = fid ? await fidQuery.execute(db) : await fnameQuery.execute(db);
  return res.json({
    user: user.rows[0]
  });
});

export const UsersRouter = router;
