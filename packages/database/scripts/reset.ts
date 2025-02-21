import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { reset } from 'drizzle-seed';
import { users } from '../src/schema/users';

const schema = { users };

async function main(): Promise<void> {
  const sql = neon(process.env['DATABASE_URL']!);
  const db = drizzle(sql, { casing: 'snake_case' });
  await reset(db, schema);
}

void main();
