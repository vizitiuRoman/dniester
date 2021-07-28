import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';
import { GenderEnum } from '../../../shared/enums/gender.enum';
import type { IStaffWorkDays } from '../../../shared/interfaces/IStaffWorkDays';
import { BookingEntity } from '../booking/booking.entity';
import { BranchEntity } from '../branch/branch.entity';
import { CompanyEntity } from '../company/company.entity';
import { ServiceEntity } from '../service/service.entity';
import { StaffDto } from './dto/StaffDto';

@Entity({ name: 'staffs' })
export class StaffEntity extends AbstractEntity<StaffDto> {
    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false, type: 'enum', enum: GenderEnum })
    gender: GenderEnum;

    @Column({ nullable: false })
    specialization: string;

    @Column({ nullable: false })
    experience: string;

    @Column({ nullable: false })
    designation: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    mobile: string;

    @Column({ nullable: false })
    startHour: string;

    @Column({ nullable: false })
    endHour: string;

    @Column({ nullable: false })
    @Column({
        type: 'jsonb',
        array: false,
        default: () => "'[]'",
        nullable: false,
    })
    availableDays: number[];

    @Column({
        type: 'jsonb',
        array: false,
        default: () => "'[]'",
        nullable: false,
    })
    workDays: IStaffWorkDays[];

    @Column({ nullable: false })
    companyId: string;

    @ManyToOne(() => ServiceEntity, (svc) => svc.staffs)
    service: ServiceEntity;

    @ManyToOne(() => BranchEntity, (svc) => svc.staffs)
    branch: BranchEntity;

    @ManyToOne(() => CompanyEntity, (svc) => svc.staffs)
    company: CompanyEntity;

    @OneToMany(() => BookingEntity, (svc) => svc.staff)
    bookings: BookingEntity[];

    dtoClass = StaffDto;
}
