import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUsers1595591051288 implements MigrationInterface {
  name = 'addUsers1595591051288';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "auth"."user"
                             (
                                 "id"         uuid              NOT NULL DEFAULT uuid_generate_v4(),
                                 "first_name" character varying NOT NULL,
                                 "last_name"  character varying NOT NULL,
                                 "patronymic" character varying NOT NULL,
                                 "email"      character varying NOT NULL,
                                 "password"   character varying NOT NULL,
                                 CONSTRAINT "PK_bd3f62c48f377e71ece9985b9b1" PRIMARY KEY ("id")
                             )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "auth"."user"`);
  }
}
