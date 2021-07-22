import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { CompanyModule } from '../../company/company.module';
import { CompanyAuthController } from './company-auth.controller';
import { CompanyAuthService } from './company-auth.service';
import { CompanyJwtStrategy } from './company-jwt.strategy';

@Module({
    imports: [
        forwardRef(() => CompanyModule),
        PassportModule.register({ defaultStrategy: 'company_jwt' }),
    ],
    controllers: [CompanyAuthController],
    providers: [CompanyAuthService, CompanyJwtStrategy],
    exports: [
        PassportModule.register({ defaultStrategy: 'company_jwt' }),
        CompanyAuthService,
    ],
})
export class CompanyAuthModule {}
