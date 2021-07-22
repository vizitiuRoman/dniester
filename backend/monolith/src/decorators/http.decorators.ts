/* eslint-disable @typescript-eslint/tslint/config */
import type { PipeTransform } from '@nestjs/common';
import {
    applyDecorators,
    Param,
    ParseUUIDPipe,
    SetMetadata,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import type { Type } from '@nestjs/common/interfaces';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

import type { RoleType } from '../common/constants/role-type';
import { CompanyAuthGuard, UserAuthGuard } from '../guards/auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { AuthCompanyInterceptor } from '../interceptors/auth-company-interceptor.service';
import { AuthUserInterceptor } from '../interceptors/auth-user-interceptor.service';

export function CompanyAuth(...roles: RoleType[]) {
    return applyDecorators(
        SetMetadata('roles', roles),
        UseGuards(CompanyAuthGuard, RolesGuard),
        ApiBearerAuth(),
        UseInterceptors(AuthCompanyInterceptor),
        ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    );
}

export function UserAuth() {
    return applyDecorators(
        UseGuards(UserAuthGuard),
        ApiBearerAuth(),
        UseInterceptors(AuthUserInterceptor),
        ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    );
}

export function UUIDParam(
    property: string,
    ...pipes: Array<Type<PipeTransform> | PipeTransform>
): ParameterDecorator {
    return Param(property, new ParseUUIDPipe({ version: '4' }), ...pipes);
}
