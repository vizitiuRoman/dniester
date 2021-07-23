import { Injectable, Logger } from '@nestjs/common';

import { BranchRepository } from '../../general/branch/branch.repository';
import type { BranchDto } from '../../general/branch/dto/BranchDto';

@Injectable()
export class AppBranchService {
    constructor(private readonly branchRepository: BranchRepository) {}

    async getBranches(): Promise<BranchDto[]> {
        try {
            return (await this.branchRepository.find()).toDtos();
        } catch (e) {
            Logger.error('[getBranches] error', e);
        }
    }
}
