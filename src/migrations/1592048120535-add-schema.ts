import { MigrationInterface, QueryRunner } from 'typeorm';

export class addSchema1592048120535 implements MigrationInterface {
  name = 'addSchema1592048120535';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`create schema "auth"`, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`drop schema "auth"`, undefined);
  }
}
