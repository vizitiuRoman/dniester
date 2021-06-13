import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { BookingEntity } from '../booking/booking.entity';
import { CompanyEntity } from '../company/company.entity';
import { ServiceDto } from './dto/ServiceDto';

@Entity({ name: 'services' })
export class ServiceEntity extends AbstractEntity<ServiceDto> {
    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    companyId: string;

    @ManyToOne(() => CompanyEntity, (company) => company.services)
    company: CompanyEntity;

    @OneToMany(() => BookingEntity, (booking) => booking.service)
    bookings: BookingEntity[];

    dtoClass = ServiceDto;
}
