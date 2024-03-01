import { Module } from '@nestjs/common';
import { PostgresDialect } from 'kysely';
import { KyselyModule } from 'nestjs-kysely';
import { Pool } from 'pg';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    KyselyModule.forRoot({
      dialect: new PostgresDialect({
        pool: new Pool({
          host: '127.0.0.1',
          user: 'postgres',
          password: 'root',
          database: 'tsNestjsTest',
        }),
      }),
    }),
    UserModule,
  ],
})
export class AppModule {}
