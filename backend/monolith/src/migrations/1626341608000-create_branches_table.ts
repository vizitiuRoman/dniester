import type { MigrationInterface, QueryRunner } from 'typeorm';

export class createBranchesTable1626341608000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "branches" (
                "id"            uuid         NOT NULL DEFAULT uuid_generate_v4(),
                "company_id"    uuid         NOT NULL,
                "service_id"    uuid,
                "name"          character varying,
                "created_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                "updated_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                CONSTRAINT "PK_a3ffb1cf164q4b9fc6fwq7b7433" PRIMARY KEY ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
