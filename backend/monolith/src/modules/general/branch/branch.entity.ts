// import { Geometry } from 'geojson';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
} from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';
import { IBranchCalendarSettings } from '../../../shared/interfaces/IBranchCalendarSettings';
import { CompanyEntity } from '../company/company.entity';
import { ServiceEntity } from '../service/service.entity';
import { StaffEntity } from '../staff/staff.entity';
import { BranchDto } from './dto/BranchDto';

@Entity({ name: 'branches' })
export class BranchEntity extends AbstractEntity<BranchDto> {
    @Column({ nullable: true })
    name: string;

    @Column({
        nullable: false,
        type: 'jsonb',
        default:
            '{"calendar": {"start": "","end": ""},"currentView": "","firstDayOfWeek": null}',
    })
    calendarSettings: IBranchCalendarSettings;

    // @Column()
    // location: Geometry;

    @OneToMany(() => StaffEntity, (svc) => svc.branch)
    staffs: StaffEntity[];

    @ManyToMany(() => ServiceEntity, (svc) => svc.branches)
    @JoinTable({
        name: 'services_branches',
        joinColumns: [{ name: 'branch_id' }],
        inverseJoinColumns: [{ name: 'service_id' }],
    })
    services: ServiceEntity[];

    @ManyToOne(() => CompanyEntity, (svc) => svc.branches)
    company: CompanyEntity[];

    dtoClass = BranchDto;
}
