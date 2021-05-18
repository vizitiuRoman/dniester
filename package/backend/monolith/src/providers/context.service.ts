import requestContext from 'request-context';

import type { CompanyEntity } from '../modules/company/company.entity';

export class ContextService {
    private static readonly nameSpace = 'request';
    private static authCompanyKey = 'company_key';
    private static languageKey = 'language_key';

    private static get<T>(key: string): T {
        return requestContext.get(ContextService.getKeyWithNamespace(key));
    }

    private static set(key: string, value: any): void {
        requestContext.set(ContextService.getKeyWithNamespace(key), value);
    }

    private static getKeyWithNamespace(key: string): string {
        return `${ContextService.nameSpace}.${key}`;
    }

    static setAuthCompany(company: CompanyEntity): void {
        ContextService.set(ContextService.authCompanyKey, company);
    }

    static setLanguage(language: string): void {
        ContextService.set(ContextService.languageKey, language);
    }

    static getLanguage(): string {
        return ContextService.get(ContextService.languageKey);
    }

    static getAuthCompany(): CompanyEntity {
        return ContextService.get(ContextService.authCompanyKey);
    }
}
