import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { BookingEntity } from '../booking/booking.entity';
import { BranchEntity } from '../branch/branch.entity';
import { CompanyEntity } from '../company/company.entity';
import { StaffEntity } from '../staff/staff.entity';
import { UserEntity } from '../user/user.entity';
import { ServiceDto } from './dto/ServiceDto';

@Entity({ name: 'services' })
export class ServiceEntity extends AbstractEntity<ServiceDto> {
    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    companyId: string;

    @ManyToOne(() => CompanyEntity, (svc) => svc.services)
    company: CompanyEntity;

    @ManyToOne(() => BranchEntity, (svc) => svc.services)
    branch: BranchEntity;

    @ManyToMany(() => UserEntity, (svc) => svc.favoritesUserServices)
    users: UserEntity;

    @OneToMany(() => BookingEntity, (svc) => svc.service)
    bookings: BookingEntity[];

    @OneToMany(() => StaffEntity, (svc) => svc.service)
    staffs: StaffEntity[];

    dtoClass = ServiceDto;
}
