import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { BookingEntity } from '../booking/booking.entity';
import { ServiceEntity } from '../service/service.entity';
import { CompanyDto } from './dto/CompanyDto';

@Entity({ name: 'companies' })
export class CompanyEntity extends AbstractEntity<CompanyDto> {
    @Column({ unique: true, nullable: true })
    email: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    fullName: string;

    @OneToMany(() => ServiceEntity, (service) => service.company)
    services: ServiceEntity[];

    @OneToMany(() => BookingEntity, (booking) => booking.company)
    bookings: BookingEntity[];

    dtoClass = CompanyDto;
}
