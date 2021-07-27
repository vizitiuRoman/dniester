import type { MigrationInterface, QueryRunner } from 'typeorm';

export class createRelations1626341752319 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "services" ADD FOREIGN KEY ("company_id") REFERENCES "companies" ("id");

            ALTER TABLE "bookings" ADD FOREIGN KEY ("service_id") REFERENCES "services" ("id");

            ALTER TABLE "bookings" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

            ALTER TABLE "favorites_user_services" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

            ALTER TABLE "favorites_user_services" ADD FOREIGN KEY ("service_id") REFERENCES "services" ("id");

            ALTER TABLE "services_branches" ADD FOREIGN KEY ("service_id") REFERENCES "services" ("id");

            ALTER TABLE "services_branches" ADD FOREIGN KEY ("branch_id") REFERENCES "branches" ("id");

            ALTER TABLE "staffs" ADD FOREIGN KEY ("service_id") REFERENCES "services" ("id");

            ALTER TABLE "staffs" ADD FOREIGN KEY ("company_id") REFERENCES "companies" ("id");

            ALTER TABLE "staffs" ADD FOREIGN KEY ("branch_id") REFERENCES "branches" ("id");

            ALTER TABLE "bookings" ADD FOREIGN KEY ("staff_id") REFERENCES "staffs" ("id");

            ALTER TABLE "bookings" ADD FOREIGN KEY ("company_id") REFERENCES "companies" ("id");

            ALTER TABLE "branches" ADD FOREIGN KEY ("company_id") REFERENCES "companies" ("id");

            ALTER TABLE "reviews" ADD FOREIGN KEY ("branch_id") REFERENCES "branches" ("id");

            ALTER TABLE "reviews" ADD FOREIGN KEY ("company_id") REFERENCES "companies" ("id");

            ALTER TABLE "reviews" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
