import type { MigrationInterface, QueryRunner } from 'typeorm';

export class createStaffsTable1626341508000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "CREATE TYPE gender_t as enum('MALE', 'FEMALE');",
        );

        await queryRunner.query(`
            CREATE TABLE "staffs" (
                "id"                uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "company_id"        uuid              NOT NULL,
                "service_id"        uuid,
                "branch_id"         uuid,
                "name"              character varying,
                "gender"            gender_t,
                "specialization"    character varying,
                "experience"        character varying,
                "designation"       character varying,
                "email"             character varying,
                "mobile"            character varying,
                "start_hour"        character varying,
                "end_hour"          character varying,
                "available_days"    jsonb             NOT NULL DEFAULT '[]'::jsonb,
                "work_days"         jsonb             NOT NULL DEFAULT '[]'::jsonb,
                "created_at"        TIMESTAMP         NOT NULL DEFAULT now(),
                "updated_at"        TIMESTAMP         NOT NULL DEFAULT now(),
                CONSTRAINT "PK_a3ffb1cf164q4b9fc6f1c7b7433" PRIMARY KEY ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
