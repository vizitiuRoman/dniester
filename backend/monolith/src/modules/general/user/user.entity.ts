import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';
import { BookingEntity } from '../booking/booking.entity';
import { ReviewEntity } from '../review/review.entity';
import { ServiceEntity } from '../service/service.entity';
import { UserDto } from './dto/UserDto';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    deviceToken: string;

    @Column({ nullable: false })
    lastName: string;

    @Column({ nullable: false })
    password: string;

    @OneToMany(() => BookingEntity, (svc) => svc.user)
    bookings: BookingEntity[];

    @OneToMany(() => ReviewEntity, (svc) => svc.user)
    reviews: ReviewEntity[];

    @ManyToMany(() => ServiceEntity, (svc) => svc.users)
    @JoinTable({
        name: 'favorites_user_services',
        joinColumns: [{ name: 'user_id' }],
        inverseJoinColumns: [{ name: 'service_id' }],
    })
    favoritesUserServices: ServiceEntity[];

    dtoClass = UserDto;
}
