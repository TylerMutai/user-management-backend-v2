import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1698167495187 implements MigrationInterface {
    name = 'Migrations1698167495187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee_profile\` DROP FOREIGN KEY \`FK_373701d8ebd68e444de0ddb0fe7\``);
        await queryRunner.query(`ALTER TABLE \`employee_profile\` ADD CONSTRAINT \`FK_373701d8ebd68e444de0ddb0fe7\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee_profile\` DROP FOREIGN KEY \`FK_373701d8ebd68e444de0ddb0fe7\``);
        await queryRunner.query(`ALTER TABLE \`employee_profile\` ADD CONSTRAINT \`FK_373701d8ebd68e444de0ddb0fe7\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
