import type { MigrationInterface, QueryRunner } from 'typeorm';

export class createFavoritesUserServicesTable1626341352887
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "favorites_user_services" (
                "id"            uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "user_id"       uuid              NOT NULL,
                "service_id"    uuid              NOT NULL,
                "created_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                "updated_at"    TIMESTAMP         NOT NULL DEFAULT now(),
                CONSTRAINT "PK_a3ffb1cf16421b9fc6f197b7433" PRIMARY KEY ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
