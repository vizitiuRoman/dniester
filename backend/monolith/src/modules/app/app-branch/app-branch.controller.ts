import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserAuth } from '../../../core/decorators/http.decorators';
import { BranchDto } from '../../general/branch/dto/BranchDto';
import { AppBranchService } from './app-branch.service';

@Controller('app/branches')
@ApiTags('app/branches')
export class AppBranchController {
    constructor(private branchService: AppBranchService) {}

    @Get('')
    @UserAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get branches list',
        type: BranchDto,
    })
    async getBranches(): Promise<BranchDto[]> {
        return this.branchService.getBranches();
    }
}
