import { Injectable } from '@nestjs/common';
import { User } from 'app/common/type/db.type';
import { KDB } from 'app/common/type/kyselyDb.type';
import { Insertable, Selectable } from 'kysely';
import { InjectKysely } from 'nestjs-kysely';

@Injectable()
export class UserRepository {
  constructor(@InjectKysely() private readonly db: KDB) {}

  public async insert(values: Insertable<User>): Promise<Selectable<User>> {
    const result = await this.db.insertInto('user').values(values).returningAll().executeTakeFirst();

    return result;
  }
}
