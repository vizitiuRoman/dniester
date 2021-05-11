import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { BookingEntity } from '../booking/booking.entity';
import { ServiceEntity } from '../service/service.entity';
import { UserDto } from './dto/UserDto';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
    @Column({ unique: true, nullable: true })
    email: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    fullName: string;

    @OneToMany(() => ServiceEntity, (service) => service.user)
    services: ServiceEntity[];

    @OneToMany(() => BookingEntity, (service) => service.user)
    bookings: BookingEntity[];

    dtoClass = UserDto;
}
