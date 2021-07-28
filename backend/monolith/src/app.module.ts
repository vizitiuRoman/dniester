import './boilerplate.polyfill';

import type { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { I18nJsonParser, I18nModule } from 'nestjs-i18n';
import path from 'path';

import { contextMiddleware } from './core/middlewares';
import { AppBookingModule } from './modules/app/app-booking/app-booking.module';
import { AppBranchModule } from './modules/app/app-branch/app-branch.module';
import { AppCompanyModule } from './modules/app/app-company/app-company.module';
import { AppReviewModule } from './modules/app/app-review/app-review.module';
import { AppServiceModule } from './modules/app/app-service/app-service.module';
import { AppUserModule } from './modules/app/app-user/app-user.module';
import { AppUserAuthModule } from './modules/app/app-user-auth/app-user-auth.module';
import { CmpAuthModule } from './modules/company/cmp-auth/cmp-auth.module';
import { CmpBookingModule } from './modules/company/cmp-booking/cmp-booking.module';
import { CmpCompanyModule } from './modules/company/cmp-company/cmp-company.module';
import { CmpServiceModule } from './modules/company/cmp-service/cmp-service.module';
import { CmpStaffModule } from './modules/company/cmp-staff/cmp-staff.module';
import { BookingModule } from './modules/general/booking/booking.module';
import { BranchModule } from './modules/general/branch/branch.module';
import { CompanyModule } from './modules/general/company/company.module';
import { ReviewModule } from './modules/general/review/review.module';
import { ServiceModule } from './modules/general/service/service.module';
import { StaffModule } from './modules/general/staff/staff.module';
import { UserModule } from './modules/general/user/user.module';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/shared.module';

@Module({
    imports: [
        BookingModule,
        BranchModule,
        CompanyModule,
        ReviewModule,
        ServiceModule,
        StaffModule,
        UserModule,
        CmpBookingModule,
        CmpAuthModule,
        CmpCompanyModule,
        CmpServiceModule,
        CmpStaffModule,
        AppBookingModule,
        AppBranchModule,
        AppCompanyModule,
        AppServiceModule,
        AppReviewModule,
        AppUserModule,
        AppUserAuthModule,
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
