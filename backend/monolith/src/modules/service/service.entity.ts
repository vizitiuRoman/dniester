import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { BookingEntity } from '../booking/booking.entity';
import { CompanyEntity } from '../company/company.entity';
import { ReviewEntity } from '../review/review.entity';
import { StaffEntity } from '../staff/staff.entity';
import { UserEntity } from '../user/user.entity';
import { ServiceDto } from './dto/ServiceDto';

@Entity({ name: 'services' })
export class ServiceEntity extends AbstractEntity<ServiceDto> {
    @Column({ nullable: true })
    name: string;

    @ManyToOne(() => CompanyEntity, (svc) => svc.services)
    company: CompanyEntity;

    @ManyToMany(() => UserEntity, (svc) => svc.favoritesUserServices)
    users: UserEntity;

    @OneToMany(() => BookingEntity, (svc) => svc.service)
    bookings: BookingEntity[];

    @OneToMany(() => ReviewEntity, (svc) => svc.service)
    reviews: ReviewEntity[];

    @OneToMany(() => StaffEntity, (svc) => svc.service)
    staffs: StaffEntity[];

    dtoClass = ServiceDto;
}
