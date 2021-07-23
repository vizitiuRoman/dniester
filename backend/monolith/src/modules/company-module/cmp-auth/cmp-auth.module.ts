import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { CompanyModule } from '../../company/company.module';
import { CmpAuthController } from './cmp-auth.controller';
import { CmpAuthService } from './cmp-auth.service';
import { CmpJwtStrategy } from './cmp-jwt.strategy';

@Module({
    imports: [
        forwardRef(() => CompanyModule),
        PassportModule.register({ defaultStrategy: 'company_jwt' }),
    ],
    controllers: [CmpAuthController],
    providers: [CmpAuthService, CmpJwtStrategy],
    exports: [
        PassportModule.register({ defaultStrategy: 'company_jwt' }),
        CmpAuthService,
    ],
})
export class CmpAuthModule {}
