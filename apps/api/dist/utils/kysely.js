"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const kysely_1 = require("kysely");
const pg_pool_1 = __importDefault(require("pg-pool"));
exports.db = new kysely_1.Kysely({
    dialect: new kysely_1.PostgresDialect({
        pool: new pg_pool_1.default({
            connectionString: process.env.PG_CONNECTION_STRING
        }),
    }),
});
//# sourceMappingURL=kysely.js.map