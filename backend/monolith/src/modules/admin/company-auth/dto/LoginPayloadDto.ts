import { ApiProperty } from '@nestjs/swagger';

import { CompanyDto } from '../../../company/dto/CompanyDto';
import { TokenPayloadDto } from './TokenPayloadDto';

export class LoginPayloadDto {
    @ApiProperty({ type: CompanyDto })
    company: CompanyDto;
    @ApiProperty({ type: TokenPayloadDto })
    token: TokenPayloadDto;

    constructor(company: CompanyDto, token: TokenPayloadDto) {
        this.company = company;
        this.token = token;
    }
}
