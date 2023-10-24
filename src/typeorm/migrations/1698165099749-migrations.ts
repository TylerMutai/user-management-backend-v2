import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1698165099749 implements MigrationInterface {
    name = 'Migrations1698165099749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_373701d8ebd68e444de0ddb0fe\` ON \`employee_profile\``);
        await queryRunner.query(`ALTER TABLE \`employee_profile\` ADD CONSTRAINT \`FK_bf76bc86fbace7a0b6957ba6b16\` FOREIGN KEY (\`departmentId\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee_profile\` ADD CONSTRAINT \`FK_7bea3184b104f38f1564078331d\` FOREIGN KEY (\`positionId\`) REFERENCES \`position\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee_profile\` DROP FOREIGN KEY \`FK_7bea3184b104f38f1564078331d\``);
        await queryRunner.query(`ALTER TABLE \`employee_profile\` DROP FOREIGN KEY \`FK_bf76bc86fbace7a0b6957ba6b16\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_373701d8ebd68e444de0ddb0fe\` ON \`employee_profile\` (\`userId\`)`);
    }

}
