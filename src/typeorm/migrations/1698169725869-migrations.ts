import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1698169725869 implements MigrationInterface {
    name = 'Migrations1698169725869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee_profile\` DROP FOREIGN KEY \`FK_373701d8ebd68e444de0ddb0fe7\``);
        await queryRunner.query(`ALTER TABLE \`employee_profile\` CHANGE \`userId\` \`userId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`employee_profile\` ADD CONSTRAINT \`FK_373701d8ebd68e444de0ddb0fe7\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee_profile\` DROP FOREIGN KEY \`FK_373701d8ebd68e444de0ddb0fe7\``);
        await queryRunner.query(`ALTER TABLE \`employee_profile\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employee_profile\` ADD CONSTRAINT \`FK_373701d8ebd68e444de0ddb0fe7\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
