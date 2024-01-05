import { Kysely, PostgresDialect } from 'kysely'
import Pool from 'pg-pool'
import type { KyselyDB } from '../types/database.t';

export const db = new Kysely<KyselyDB>({
    dialect: new PostgresDialect({
      pool: new Pool({
        connectionString: process.env.PG_CONNECTION_STRING ?? "postgres://postgres:7k6sW8hf8nrRkTJg@db.vnbedsacwodkycsybrxm.supabase.co:6543/postgres",
      }),
    }),
});