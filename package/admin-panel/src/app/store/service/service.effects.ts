import { Injectable } from '@angular/core';
import { Service } from '@models/service.model';

import { Actions } from '@ngrx/effects';
import { ServiceService } from '@services/service.service';
import { CrudEffect } from '@store/core/crud.effect';

import {
    addService,
    addServices,
    beginAddService,
    beginDeleteServices,
    beginUpdateService,
    deleteServices,
    loadServices,
    updateService,
} from '@store/service/service.actions';

@Injectable()
export class ServiceEffects extends CrudEffect<Service, string> {
    constructor(actions$: Actions, serviceService: ServiceService) {
        super(
            actions$,
            serviceService,
            loadServices,
            addServices,
            addService,
            updateService,
            deleteServices,
            beginAddService,
            beginUpdateService,
            beginDeleteServices
        );
    }
}
