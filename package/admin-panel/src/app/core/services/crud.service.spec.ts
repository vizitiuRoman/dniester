import { TestBed } from '@angular/core/testing';

import { CrudHttpService } from './crud-http.service';

describe('CrudService', () => {
    // @ts-ignore
    let service: CrudHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CrudHttpService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
