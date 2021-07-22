import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { CompanyEntity } from '../company/company.entity';
import { ReviewEntity } from '../review/review.entity';
import { ServiceEntity } from '../service/service.entity';
import { StaffEntity } from '../staff/staff.entity';
import { BranchDto } from './dto/BranchDto';

@Entity({ name: 'branches' })
export class BranchEntity extends AbstractEntity<BranchDto> {
    @Column({ nullable: true })
    name: string;

    @OneToMany(() => StaffEntity, (svc) => svc.branch)
    staffs: StaffEntity[];

    @OneToMany(() => ReviewEntity, (svc) => svc.branch)
    reviews: ReviewEntity[];

    @OneToMany(() => ServiceEntity, (svc) => svc.branch)
    services: ServiceEntity[];

    @ManyToOne(() => CompanyEntity, (svc) => svc.branches)
    company: CompanyEntity[];

    dtoClass = BranchDto;
}
