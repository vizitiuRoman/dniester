import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { BookingEntity } from '../booking/booking.entity';
import { UserEntity } from '../user/user.entity';
import { ServiceDto } from './dto/ServiceDto';

@Entity({ name: 'services' })
export class ServiceEntity extends AbstractEntity<ServiceDto> {
    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    userId: string;

    @ManyToOne(() => UserEntity, (user) => user.services)
    user: UserEntity;

    @OneToMany(() => BookingEntity, (booking) => booking.service)
    bookings: BookingEntity[];

    dtoClass = ServiceDto;
}
