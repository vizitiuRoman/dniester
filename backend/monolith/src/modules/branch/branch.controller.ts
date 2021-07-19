import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { BranchService } from './branch.service';
import { BranchDto } from './dto/BranchDto';

@Controller('branches')
@ApiTags('branches')
export class BranchController {
    constructor(private branchService: BranchService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get branches list',
        type: BranchDto,
    })
    getBranches(): Promise<BranchDto[]> {
        return this.branchService.getBranches();
    }
}
