import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { CompanyModule } from '../company/company.module';
import { CompanyAuthController } from './company-auth.controller';
import { CompanyAuthService } from './company-auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        forwardRef(() => CompanyModule),
        PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
    controllers: [CompanyAuthController],
    providers: [CompanyAuthService, JwtStrategy],
    exports: [PassportModule.register({ defaultStrategy: 'jwt' }), CompanyAuthService],
})
export class CompanyAuthModule {}
