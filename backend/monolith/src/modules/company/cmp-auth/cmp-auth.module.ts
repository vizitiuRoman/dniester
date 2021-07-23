import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { CmpCompanyModule } from '../cmp-company/cmp-company.module';
import { CmpAuthController } from './cmp-auth.controller';
import { CmpAuthService } from './cmp-auth.service';
import { CmpJwtStrategy } from './cmp-jwt.strategy';

@Module({
    imports: [
        forwardRef(() => CmpCompanyModule),
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
