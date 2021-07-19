import type { MigrationInterface, QueryRunner } from 'typeorm';

export class createUsersTable1626341337387 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "users"
            (
                "id"            uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "name"          character varying,
                "last_name"     character varying,
                "email"         character varying,
                "password"      character varying,
                "created_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                "updated_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_97672ac88q789s74b347f7c8be3" UNIQUE ("email"),
                CONSTRAINT "PK_b1ffb1c0c8416b9fc6f901b7433" PRIMARY KEY ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
