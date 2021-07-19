import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { CompanyEntity } from '../company/company.entity';
import { StaffEntity } from '../staff/staff.entity';
import { BranchDto } from './dto/BranchDto';

@Entity({ name: 'branches' })
export class BranchEntity extends AbstractEntity<BranchDto> {
    @Column({ nullable: true })
    name: string;

    @OneToMany(() => StaffEntity, (svc) => svc.branch)
    staffs: StaffEntity[];

    @ManyToOne(() => CompanyEntity, (svc) => svc.branches)
    company: CompanyEntity[];

    dtoClass = BranchDto;
}
