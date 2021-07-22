import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { UserModule } from '../user/user.module';
import { UserAuthController } from './user-auth.controller';
import { UserAuthService } from './user-auth.service';
import { UserJwtStrategy } from './user-jwt.strategy';

@Module({
    imports: [
        forwardRef(() => UserModule),
        PassportModule.register({ defaultStrategy: 'user_jwt' }),
    ],
    controllers: [UserAuthController],
    providers: [UserAuthService, UserJwtStrategy],
    exports: [
        PassportModule.register({ defaultStrategy: 'user_jwt' }),
        UserAuthService,
    ],
})
export class UserAuthModule {}
