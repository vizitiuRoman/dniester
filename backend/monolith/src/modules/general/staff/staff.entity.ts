import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';
import { BookingEntity } from '../booking/booking.entity';
import { BranchEntity } from '../branch/branch.entity';
import { CompanyEntity } from '../company/company.entity';
import { ServiceEntity } from '../service/service.entity';
import { StaffDto } from './dto/StaffDto';

@Entity({ name: 'staffs' })
export class StaffEntity extends AbstractEntity<StaffDto> {
    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    companyId: string;

    @ManyToOne(() => ServiceEntity, (svc) => svc.staffs)
    service: ServiceEntity;

    @ManyToOne(() => BranchEntity, (svc) => svc.staffs)
    branch: BranchEntity;

    @ManyToOne(() => CompanyEntity, (svc) => svc.staffs)
    company: CompanyEntity;

    @OneToMany(() => BookingEntity, (svc) => svc.staff)
    bookings: BookingEntity[];

    dtoClass = StaffDto;
}
