import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { GenderEnum } from '../../../../shared/enums/gender.enum';
import type { IStaffWorkDays } from '../../../../shared/interfaces/IStaffWorkDays';
import type { StaffEntity } from '../staff.entity';

export class StaffDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    @ApiPropertyOptional()
    gender: GenderEnum;

    @ApiPropertyOptional()
    specialization: string;

    @ApiPropertyOptional()
    experience: string;

    @ApiPropertyOptional()
    designation: string;

    @ApiPropertyOptional()
    email: string;

    @ApiPropertyOptional()
    mobile: string;

    @ApiPropertyOptional()
    startHour: string;

    @ApiPropertyOptional()
    endHour: string;

    @ApiPropertyOptional()
    availableDays: number[];

    @ApiPropertyOptional()
    workDays: IStaffWorkDays[];

    @ApiPropertyOptional()
    companyId: string;

    constructor(service: StaffEntity) {
        super(service);
        this.name = service.name;
        this.gender = service.gender;
        this.specialization = service.specialization;
        this.experience = service.experience;
        this.designation = service.designation;
        this.email = service.email;
        this.mobile = service.mobile;
        this.startHour = service.startHour;
        this.endHour = service.endHour;
        this.availableDays = service.availableDays;
        this.workDays = service.workDays;
        this.companyId = service.companyId;
    }
}
