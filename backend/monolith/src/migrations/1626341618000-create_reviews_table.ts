import type { MigrationInterface, QueryRunner } from 'typeorm';

export class createReviewsTable1626341618000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "reviews" (
                "id"            uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "message"       character varying,
                "rate"          float,
                "company_id"    uuid              NOT NULL,
                "service_id"    uuid              NOT NULL,
                "user_id"       uuid              NOT NULL,
                "created_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                "updated_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                CONSTRAINT "PK_a3ffb1qf164q4b9fc6fwq7b7433" PRIMARY KEY ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
