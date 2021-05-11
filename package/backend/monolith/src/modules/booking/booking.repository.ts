import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { BookingEntity } from './booking.entity';

@EntityRepository(BookingEntity)
export class BookingRepository extends Repository<BookingEntity> {}
