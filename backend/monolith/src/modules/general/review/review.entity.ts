import { Column, Entity, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';
import { CompanyEntity } from '../company/company.entity';
import { ServiceEntity } from '../service/service.entity';
import { UserEntity } from '../user/user.entity';
import { ReviewDto } from './dto/ReviewDto';

@Entity({ name: 'reviews' })
export class ReviewEntity extends AbstractEntity<ReviewDto> {
    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    userId: string;

    @ManyToOne(() => ServiceEntity, (svc) => svc.reviews)
    service: ServiceEntity;

    @ManyToOne(() => UserEntity, (svc) => svc.reviews)
    user: UserEntity;

    @ManyToOne(() => CompanyEntity, (svc) => svc.reviews)
    company: CompanyEntity;

    dtoClass = ReviewDto;
}
