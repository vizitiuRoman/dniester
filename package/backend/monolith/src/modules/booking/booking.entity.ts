import { Column, Entity, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { ServiceEntity } from '../service/service.entity';
import { UserEntity } from '../user/user.entity';
import { BookingDto } from './dto/BookingDto';

@Entity({ name: 'bookings' })
export class BookingEntity extends AbstractEntity<BookingDto> {
    @Column({ nullable: true })
    serviceId: string;

    @Column({ nullable: true })
    userId: string;

    @ManyToOne(() => UserEntity, (svc) => svc.bookings)
    user: UserEntity;

    @ManyToOne(() => ServiceEntity, (svc) => svc.bookings)
    service: ServiceEntity;

    dtoClass = BookingDto;
}
