import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1698151737574 implements MigrationInterface {
    name = 'Migrations1698151737574'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`department\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`position\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`team\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'pending', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee_profile\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`departmentId\` int NULL, \`positionId\` int NULL, UNIQUE INDEX \`REL_bf76bc86fbace7a0b6957ba6b1\` (\`departmentId\`), UNIQUE INDEX \`REL_7bea3184b104f38f1564078331\` (\`positionId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`employeeProfileId\` int NULL, UNIQUE INDEX \`REL_994748e0b587185895fd90c24f\` (\`employeeProfileId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee_profile_teams_team\` (\`employeeProfileId\` int NOT NULL, \`teamId\` int NOT NULL, INDEX \`IDX_03edb8514d23e77856ea4cdc8a\` (\`employeeProfileId\`), INDEX \`IDX_5f0e1aaf8a09294634078ccc8d\` (\`teamId\`), PRIMARY KEY (\`employeeProfileId\`, \`teamId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`employee_profile\` ADD CONSTRAINT \`FK_bf76bc86fbace7a0b6957ba6b16\` FOREIGN KEY (\`departmentId\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee_profile\` ADD CONSTRAINT \`FK_7bea3184b104f38f1564078331d\` FOREIGN KEY (\`positionId\`) REFERENCES \`position\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_994748e0b587185895fd90c24f1\` FOREIGN KEY (\`employeeProfileId\`) REFERENCES \`employee_profile\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee_profile_teams_team\` ADD CONSTRAINT \`FK_03edb8514d23e77856ea4cdc8a7\` FOREIGN KEY (\`employeeProfileId\`) REFERENCES \`employee_profile\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`employee_profile_teams_team\` ADD CONSTRAINT \`FK_5f0e1aaf8a09294634078ccc8d5\` FOREIGN KEY (\`teamId\`) REFERENCES \`team\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee_profile_teams_team\` DROP FOREIGN KEY \`FK_5f0e1aaf8a09294634078ccc8d5\``);
        await queryRunner.query(`ALTER TABLE \`employee_profile_teams_team\` DROP FOREIGN KEY \`FK_03edb8514d23e77856ea4cdc8a7\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_994748e0b587185895fd90c24f1\``);
        await queryRunner.query(`ALTER TABLE \`employee_profile\` DROP FOREIGN KEY \`FK_7bea3184b104f38f1564078331d\``);
        await queryRunner.query(`ALTER TABLE \`employee_profile\` DROP FOREIGN KEY \`FK_bf76bc86fbace7a0b6957ba6b16\``);
        await queryRunner.query(`DROP INDEX \`IDX_5f0e1aaf8a09294634078ccc8d\` ON \`employee_profile_teams_team\``);
        await queryRunner.query(`DROP INDEX \`IDX_03edb8514d23e77856ea4cdc8a\` ON \`employee_profile_teams_team\``);
        await queryRunner.query(`DROP TABLE \`employee_profile_teams_team\``);
        await queryRunner.query(`DROP INDEX \`REL_994748e0b587185895fd90c24f\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`REL_7bea3184b104f38f1564078331\` ON \`employee_profile\``);
        await queryRunner.query(`DROP INDEX \`REL_bf76bc86fbace7a0b6957ba6b1\` ON \`employee_profile\``);
        await queryRunner.query(`DROP TABLE \`employee_profile\``);
        await queryRunner.query(`DROP TABLE \`team\``);
        await queryRunner.query(`DROP TABLE \`position\``);
        await queryRunner.query(`DROP TABLE \`department\``);
    }

}
