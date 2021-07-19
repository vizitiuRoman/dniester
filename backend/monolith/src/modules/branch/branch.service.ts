import { Injectable, Logger } from '@nestjs/common';

import { BranchRepository } from './branch.repository';
import type { BranchDto } from './dto/BranchDto';

@Injectable()
export class BranchService {
    constructor(private readonly branchRepository: BranchRepository) {}

    async getBranches(): Promise<BranchDto[]> {
        try {
            return (await this.branchRepository.find()).toDtos();
        } catch (e) {
            Logger.error('[getBranches] error', e);
        }
    }
}
