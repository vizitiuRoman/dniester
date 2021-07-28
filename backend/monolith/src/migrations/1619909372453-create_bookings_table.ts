import type { MigrationInterface, QueryRunner } from 'typeorm';

export class createBookingsTable1619909372453 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "CREATE TYPE booking_status_t as enum('COMPLETED', 'ACTIVE', 'CANCELLED');",
        );

        await queryRunner.query(`
            CREATE TABLE "bookings"
            (
                "id"            uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "service_id"    uuid              NOT NULL,
                "company_id"    uuid              NOT NULL,
                "status"        booking_status_t  NOT NULL,
                "staff_id"      uuid              NOT NULL,
                "start"         TIMESTAMP         NOT NULL,
                "end"           TIMESTAMP         NOT NULL,
                "user_id"       uuid              NOT NULL,
                "created_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                "updated_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "bookings"');
    }
}
