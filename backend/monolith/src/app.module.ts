import './boilerplate.polyfill';

import type { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { I18nJsonParser, I18nModule } from 'nestjs-i18n';
import path from 'path';

import { contextMiddleware } from './middlewares';
import { AdminCompanyModule } from './modules/admin/admin-company/admin-company.module';
import { BookingModule } from './modules/booking/booking.module';
import { BranchModule } from './modules/branch/branch.module';
import { CompanyModule } from './modules/company/company.module';
import { CompanyAuthModule } from './modules/admin/company-auth/company-auth.module';
import { ReviewModule } from './modules/review/review.module';
import { ServiceModule } from './modules/service/service.module';
import { StaffModule } from './modules/staff/staff.module';
import { UserModule } from './modules/user/user.module';
import { UserAuthModule } from './modules/user-auth/user-auth.module';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/shared.module';

@Module({
    imports: [
        UserAuthModule,
        CompanyAuthModule,
        CompanyModule,
        ServiceModule,
        AdminCompanyModule,
        StaffModule,
        ReviewModule,
        BranchModule,
        BookingModule,
        StaffModule,
        UserModule,
        TypeOrmModule.forRootAsync({
            imports: [SharedModule],
            useFactory: (configService: ConfigService) =>
                configService.typeOrmConfig,
            inject: [ConfigService],
        }),
        I18nModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                fallbackLanguage: configService.fallbackLanguage,
                parserOptions: {
                    path: path.join(__dirname, '/i18n/'),
                    watch: configService.isDevelopment,
                },
            }),
            imports: [SharedModule],
            parser: I18nJsonParser,
            inject: [ConfigService],
        }),
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer.apply(contextMiddleware).forRoutes('*');
    }
}
