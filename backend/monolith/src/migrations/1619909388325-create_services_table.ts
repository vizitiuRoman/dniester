import type { MigrationInterface, QueryRunner } from 'typeorm';

export class createServicesTable1619909388325 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "services"
            (
                "id"            uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "name"          character varying,
                "company_id"    uuid              NOT NULL,
                "created_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                "updated_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                CONSTRAINT "PK_a3ffb1sf16421b9fc6f907b7433" PRIMARY KEY ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "services"');
    }
}
