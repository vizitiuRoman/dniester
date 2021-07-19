import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { BranchEntity } from './branch.entity';

@EntityRepository(BranchEntity)
export class BranchRepository extends Repository<BranchEntity> {}
