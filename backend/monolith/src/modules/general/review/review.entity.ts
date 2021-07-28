import { Column, Entity, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';
import { BranchEntity } from '../branch/branch.entity';
import { CompanyEntity } from '../company/company.entity';
import { UserEntity } from '../user/user.entity';
import { ReviewDto } from './dto/ReviewDto';

@Entity({ name: 'reviews' })
export class ReviewEntity extends AbstractEntity<ReviewDto> {
    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    userId: string;

    @ManyToOne(() => BranchEntity, (svc) => svc.reviews)
    branch: BranchEntity[];

    @ManyToOne(() => UserEntity, (svc) => svc.reviews)
    user: UserEntity;

    @ManyToOne(() => CompanyEntity, (svc) => svc.reviews)
    company: CompanyEntity;

    dtoClass = ReviewDto;
}
