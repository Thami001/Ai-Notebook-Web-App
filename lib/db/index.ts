import {neon, neonConfig} from "@neondatabase/serverless";
import {drizzle} from "drizzle-orm/neon-http"


neonConfig.fetchConnectionCache = true;

if(!process.env.URL) {
    throw new Error('Missing DATABASE_URL')
}

const sql = neon(process.env.URL)
export const db = drizzle(sql)