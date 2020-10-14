import { MigrationInterface, QueryRunner } from 'typeorm';

export class addRefreshTokens1595591137952 implements MigrationInterface {
  name = 'addRefreshTokens1595591137952';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "auth"."refresh_token"
                             (
                                 "id"            uuid NOT NULL DEFAULT uuid_generate_v4(),
                                 "user_id"       uuid NOT NULL,
                                 "refresh_token" uuid NOT NULL,
                                 CONSTRAINT "PK_68ef8f77bfadc5b415479535aa6" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`ALTER TABLE "auth"."refresh_token"
        ADD CONSTRAINT "FK_3f3a21ee517c6fe32bfec7f4858" FOREIGN KEY ("user_id") REFERENCES "auth"."user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "auth"."refresh_token"
        DROP CONSTRAINT "FK_3f3a21ee517c6fe32bfec7f4858"`);
    await queryRunner.query(`DROP TABLE "auth"."refresh_token"`);
  }
}
