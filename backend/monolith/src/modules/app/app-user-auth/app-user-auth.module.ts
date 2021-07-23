import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AppUserModule } from '../app-user/app-user.module';
import { AppUserAuthController } from './app-user-auth.controller';
import { AppUserAuthService } from './app-user-auth.service';
import { AppUserJwtStrategy } from './app-user-jwt.strategy';

@Module({
    imports: [
        forwardRef(() => AppUserModule),
        PassportModule.register({ defaultStrategy: 'user_jwt' }),
    ],
    controllers: [AppUserAuthController],
    providers: [AppUserAuthService, AppUserJwtStrategy],
    exports: [
        PassportModule.register({ defaultStrategy: 'user_jwt' }),
        AppUserAuthService,
    ],
})
export class AppUserAuthModule {}
