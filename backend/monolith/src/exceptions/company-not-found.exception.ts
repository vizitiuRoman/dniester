import { NotFoundException } from '@nestjs/common';

export class CompanyNotFoundException extends NotFoundException {
    constructor(error?: string) {
        super('error.company_not_found', error);
    }
}
