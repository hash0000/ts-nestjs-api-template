import { Kysely } from 'kysely';
import { DB } from './db.type';

export type KDB = Kysely<DB>;
