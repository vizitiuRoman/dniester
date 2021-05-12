import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { Observable } from 'rxjs';

import { ServiceEffects } from './service.effects';

describe('ServiceEffects', () => {
    // tslint:disable-next-line:prefer-const no-any
    let actions$: Observable<any>;
    let effects: ServiceEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ServiceEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(ServiceEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
