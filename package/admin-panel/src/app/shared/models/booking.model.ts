import { BaseModel } from './base.model';
import { Service } from './service.model';

export class Booking extends BaseModel<string> {
    serviceId!: string;

    service!: Service;
}
