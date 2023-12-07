"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRouter = void 0;
const express_1 = require("express");
const kysely_1 = require("utils/kysely");
const kysely_2 = require("kysely");
const router = (0, express_1.Router)();
router.get("/user", async (req, res) => {
    const { fid, fname } = req.query;
    const fidQuery = (0, kysely_2.sql) `
    SELECT 
        *,
        CONCAT('0x', encode(custody_address, 'hex')) as custody_address
    FROM 
        users 
    WHERE 
        fid = CAST(${fid} AS bigint) 
    LIMIT 1;
`;
    const fnameQuery = (0, kysely_2.sql) `
      SELECT 
          *,
          CONCAT('0x', encode(custody_address, 'hex')) as custody_address
      FROM 
          users 
      WHERE 
          fname = ${fname} 
      LIMIT 1;
  `;
    const user = fid ? await fidQuery.execute(kysely_1.db) : await fnameQuery.execute(kysely_1.db);
    return res.json({
        user: user.rows[0]
    });
});
exports.UsersRouter = router;
//# sourceMappingURL=controller.js.map