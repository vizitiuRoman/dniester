import type {
    CallHandler,
    ExecutionContext,
    NestInterceptor,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { Observable } from 'rxjs';

import type { CompanyEntity } from '../modules/general/company/company.entity';
import { ContextService } from '../providers/context.service';

@Injectable()
export class AuthCompanyInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();

        const company = <CompanyEntity>request.user;
        ContextService.setAuthCompany(company);

        return next.handle();
    }
}
