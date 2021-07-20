import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { UserModule } from '../user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { UserAuthController } from './user-auth.controller';
import { UserAuthService } from './user-auth.service';

@Module({
    imports: [
        forwardRef(() => UserModule),
        PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
    controllers: [UserAuthController],
    providers: [UserAuthService, JwtStrategy],
    exports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        UserAuthService,
    ],
})
export class UserAuthModule {}
