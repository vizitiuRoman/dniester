import { BaseModel } from '@models/base.model';
import { Booking } from './booking.model';
import { User } from './user.model';

export class Service extends BaseModel<string>{
    id!: string;

    name!: string;

    userId!: string;

    user!: User;

    bookings!: Booking[];
}
