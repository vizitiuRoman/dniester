import { Injectable, Logger } from '@nestjs/common';
import type { FindManyOptions } from 'typeorm/find-options/FindManyOptions';

import type { BranchEntity } from '../../general/branch/branch.entity';
import { BranchRepository } from '../../general/branch/branch.repository';
import type { BranchDto } from '../../general/branch/dto/BranchDto';

@Injectable()
export class AppBranchService {
    constructor(private readonly branchRepository: BranchRepository) {}

    async getBranches(
        options?: FindManyOptions<BranchEntity>,
    ): Promise<BranchDto[]> {
        try {
            return (await this.branchRepository.find(options)).toDtos();
        } catch (e) {
            Logger.error('[getBranches] error', e);
        }
    }
}
