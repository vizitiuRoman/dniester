import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';

import { NbAuthService, NbTokenLocalStorage } from '@nebular/auth';

import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private nbTokenService: NbTokenLocalStorage,
        private nbAuthService: NbAuthService
    ) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        return this.nbAuthService.isAuthenticated().pipe(
            mergeMap((isAuth) => {
                if (isAuth) {
                    request = request.clone({
                        setHeaders: {
                            Authorization: `Bearer ${this.nbTokenService
                                .get()
                                .getValue()}`,
                        },
                    });
                }
                return next.handle(request);
            })
        );
    }
}
