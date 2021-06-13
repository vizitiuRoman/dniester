import { Column, Entity, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { CompanyEntity } from '../company/company.entity';
import { ServiceEntity } from '../service/service.entity';
import { BookingDto } from './dto/BookingDto';

@Entity({ name: 'bookings' })
export class BookingEntity extends AbstractEntity<BookingDto> {
    @Column({ nullable: true })
    serviceId: string;

    @Column({ nullable: true })
    companyId: string;

    @ManyToOne(() => CompanyEntity, (svc) => svc.bookings)
    company: CompanyEntity;

    @ManyToOne(() => ServiceEntity, (svc) => svc.bookings)
    service: ServiceEntity;

    dtoClass = BookingDto;
}
