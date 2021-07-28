import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import type { FindManyOptions } from 'typeorm/find-options/FindManyOptions';

import type { StaffDto } from '../../general/staff/dto/StaffDto';
import type { StaffEntity } from '../../general/staff/staff.entity';
import { StaffRepository } from '../../general/staff/staff.repository';
import type { CreateCmpStaffDto } from './dto/CreateCmpStaffDto';
import type { UpdateCmpStaffDto } from './dto/UpdateCmpStaffDto';

@Injectable()
export class CmpStaffService {
    constructor(private readonly staffRepository: StaffRepository) {}

    public async createStaff(staff: CreateCmpStaffDto): Promise<StaffDto> {
        try {
            const createdStaff = this.staffRepository.create(staff);
            return (await this.staffRepository.save(createdStaff)).toDto();
        } catch (e) {
            Logger.error('[createStaff] error', e, CmpStaffService.name);
        }
    }

    public async updateStaff(staff: UpdateCmpStaffDto): Promise<StaffDto> {
        try {
            return (await this.staffRepository.save(staff)).toDto();
        } catch (e) {
            Logger.error('[updateStaff] error', e, CmpStaffService.name);
        }
    }

    public async getCompanyStaffs(
        companyId: string,
        options?: FindManyOptions<StaffEntity>,
    ): Promise<StaffDto[]> {
        try {
            return (
                await this.staffRepository.find({
                    ...options,
                    where: {
                        companyId,
                    },
                })
            ).toDtos();
        } catch (e) {
            Logger.error('[getCompanyStaffs] error', e, CmpStaffService.name);
        }
    }

    public async getStaff(id: string): Promise<StaffDto> {
        try {
            return (
                await this.staffRepository.findOne({
                    where: {
                        id,
                    },
                })
            ).toDto();
        } catch (e) {
            Logger.error('[getStaff] error', e, CmpStaffService.name);
        }
    }

    public async deleteStaff(id: string): Promise<StaffDto> {
        try {
            const staff = await this.staffRepository.findOne({
                where: {
                    id,
                },
            });
            if (!staff) {
                throw new NotFoundException(`not found staff: id ${id}`);
            }
            return (await this.staffRepository.remove(staff)).toDto();
        } catch (e) {
            Logger.error('[deleteStaff] error', e, CmpStaffService.name);
        }
    }
}
