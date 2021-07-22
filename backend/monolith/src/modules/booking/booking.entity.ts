import { Column, Entity, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { CompanyEntity } from '../company/company.entity';
import { ServiceEntity } from '../service/service.entity';
import { StaffEntity } from '../staff/staff.entity';
import { UserEntity } from '../user/user.entity';
import { BookingDto } from './dto/BookingDto';

@Entity({ name: 'bookings' })
export class BookingEntity extends AbstractEntity<BookingDto> {
    @Column({ nullable: false })
    companyId: string;

    @ManyToOne(() => CompanyEntity, (svc) => svc.bookings)
    company: CompanyEntity;

    @ManyToOne(() => ServiceEntity, (svc) => svc.bookings)
    service: ServiceEntity;

    @ManyToOne(() => StaffEntity, (svc) => svc.bookings)
    staff: StaffEntity;

    @ManyToOne(() => UserEntity, (svc) => svc.bookings)
    user: UserEntity;

    dtoClass = BookingDto;
}
