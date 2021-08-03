import { ApiPropertyOptional } from '@nestjs/swagger';

import { GenderEnum } from '../../../../shared/enums/gender.enum';
import type { IStaffWorkDays } from '../../../../shared/interfaces/IStaffWorkDays';

export class CreateCmpStaffDto {
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
}
