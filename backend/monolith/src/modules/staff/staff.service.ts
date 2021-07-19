import { Injectable } from '@nestjs/common';

import type { StaffDto } from './dto/StaffDto';
import { StaffRepository } from './staff.repository';

@Injectable()
export class StaffService {
    constructor(private readonly staffRepository: StaffRepository) {}

    async getStaffs(): Promise<StaffDto[]> {
        const staffs = await this.staffRepository.find();
        return staffs.toDtos();
    }
}
