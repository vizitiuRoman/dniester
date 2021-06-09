import type { MigrationInterface, QueryRunner } from 'typeorm';

export class createBookingsTable1619909372453 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "bookings"
            (
                "id"            uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "created_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                "updated_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                "service_id"    uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "company_id"       uuid              NOT NULL DEFAULT uuid_generate_v4(),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "bookings"');
    }
}
