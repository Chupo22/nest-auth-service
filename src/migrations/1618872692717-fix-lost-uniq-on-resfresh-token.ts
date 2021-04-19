import { MigrationInterface, QueryRunner } from 'typeorm';

export class fixLostUniqOnResfreshToken1618872692717
  implements MigrationInterface {
  name = 'fixLostUniqOnResfreshToken1618872692717';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "auth"."refresh_token" DROP CONSTRAINT "FK_3f3a21ee517c6fe32bfec7f4858"`,
    );
    await queryRunner.query(
      `ALTER TABLE "auth"."refresh_token" ADD CONSTRAINT "UQ_a72ecb3e9f086212bfa684c44bb" UNIQUE ("refresh_token")`,
    );
    await queryRunner.query(
      `ALTER TABLE "auth"."refresh_token" ADD CONSTRAINT "FK_d37ea24b7f4fe79c6f60203bdda" FOREIGN KEY ("user_id") REFERENCES "auth"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "auth"."refresh_token" DROP CONSTRAINT "FK_d37ea24b7f4fe79c6f60203bdda"`,
    );
    await queryRunner.query(
      `ALTER TABLE "auth"."refresh_token" DROP CONSTRAINT "UQ_a72ecb3e9f086212bfa684c44bb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "auth"."refresh_token" ADD CONSTRAINT "FK_3f3a21ee517c6fe32bfec7f4858" FOREIGN KEY ("user_id") REFERENCES "auth"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
