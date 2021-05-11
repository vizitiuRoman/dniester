import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { NbAuthService } from '@nebular/auth';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: NbAuthService) {}

    canActivate(): Observable<boolean> {
        return this.authService.isAuthenticated();
    }
}
