import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { BookingEntity } from '../booking/booking.entity';
import { BranchEntity } from '../branch/branch.entity';
import { ReviewEntity } from '../review/review.entity';
import { ServiceEntity } from '../service/service.entity';
import { StaffEntity } from '../staff/staff.entity';
import { CompanyDto } from './dto/CompanyDto';

@Entity({ name: 'companies' })
export class CompanyEntity extends AbstractEntity<CompanyDto> {
    @Column({ unique: true, nullable: true })
    email: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    fullName: string;

    @OneToMany(() => ServiceEntity, (svc) => svc.company)
    services: ServiceEntity[];

    @OneToMany(() => ReviewEntity, (svc) => svc.company)
    reviews: ReviewEntity[];

    @OneToMany(() => BranchEntity, (svc) => svc.company)
    branches: BranchEntity[];

    @OneToMany(() => StaffEntity, (svc) => svc.company)
    staffs: StaffEntity[];

    @OneToMany(() => BookingEntity, (svc) => svc.company)
    bookings: BookingEntity[];

    dtoClass = CompanyDto;
}
