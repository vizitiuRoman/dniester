import type { MigrationInterface, QueryRunner } from 'typeorm';

export class createRelations1619910575220 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
                ALTER TABLE bookings ADD FOREIGN KEY (service_id) references services(id);
                ALTER TABLE bookings ADD FOREIGN KEY (company_id) references companies(id);
                ALTER TABLE services ADD FOREIGN KEY (company_id) references companies(id);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
