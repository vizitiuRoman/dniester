import type { MigrationInterface, QueryRunner } from 'typeorm';

export class createStaffsTable1626341508000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "staffs" (
                "id"                uuid         NOT NULL DEFAULT uuid_generate_v4(),
                "company_id"        uuid         NOT NULL,
                "service_id"        uuid,
                "branch_id"         uuid,
                "name"              character varying,
                "gender"            character varying,
                "specialization"    character varying,
                "experience"        character varying,
                "designation"       character varying,
                "email"             character varying,
                "mobile"            character varying,
                "start_hour"        TIMESTAMP,
                "end_hour"          TIMESTAMP,
                "available_days"    jsonb '[]'::jsonb,
                "work_days"         jsonb '[]'::jsonb,
                "created_at"        TIMESTAMP         NOT NULL DEFAULT now(),
                "updated_at"        TIMESTAMP         NOT NULL DEFAULT now(),
                CONSTRAINT "PK_a3ffb1cf164q4b9fc6f1c7b7433" PRIMARY KEY ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
