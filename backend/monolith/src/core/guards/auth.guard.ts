import { AuthGuard as NestAuthGuard } from '@nestjs/passport';

// This should be used as guard class
// eslint-disable-next-line @typescript-eslint/naming-convention
export const CompanyAuthGuard = NestAuthGuard('company_jwt');

export const UserAuthGuard = NestAuthGuard('user_jwt');
