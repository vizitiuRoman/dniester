import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import {
    NbThemeModule,
    NbLayoutModule,
    NbActionsModule,
    NbSidebarModule,
    NbSidebarService,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ServicesComponent } from '@pages/services/services.component';
import { environment } from '@environments/environment';
import { TokenInterceptor } from '@interceptors/token.interceptor';

import { reducers, metaReducers } from './store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent, ServicesComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbLayoutModule,
        NbEvaIconsModule,
        NbAuthModule.forRoot({
            strategies: [
                NbPasswordAuthStrategy.setup({
                    name: 'email',

                    token: {
                        key: 'token.accessToken',
                    },

                    baseEndpoint: environment.API_URL,
                    login: {
                        // ...
                        endpoint: '/auth/login',
                        redirect: {
                            success: '/home', // welcome page path
                            failure: null, // stay on the same page
                        },
                    },
                    register: {
                        // ...
                        endpoint: '/auth/register',
                    },
                }),
            ],
            forms: {},
        }),
        NbActionsModule,
        NbSidebarModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([]),
    ],
    providers: [
        NbSidebarService,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
