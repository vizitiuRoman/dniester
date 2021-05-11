import { Booking } from './booking.model';
import { User } from './user.model';

export class Service {
    id!: string;

    name!: string;

    userId!: string;

    user!: User;

    bookings!: Booking[];
}
