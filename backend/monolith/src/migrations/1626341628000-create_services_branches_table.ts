import type { MigrationInterface, QueryRunner } from 'typeorm';

export class createServicesBranchesTable1626341628000
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "services_branches" (
                "id"            uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "branch_id"     uuid              NOT NULL,
                "service_id"    uuid              NOT NULL,
                CONSTRAINT "PK_a3fqbdqf164q4zcsc6fwq7b7433" PRIMARY KEY ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
