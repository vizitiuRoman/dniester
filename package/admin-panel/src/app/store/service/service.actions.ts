import { Create } from '@models/base.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Service } from '@models/service.model';

export const loadServices = createAction('[Service/API] Load Services');

export const beginAddService = createAction(
    '[Service/API] Begin Add Service',
    props<{ data: Create<Service, string> }>()
);

export const beginUpdateService = createAction(
    '[Service/API] Begin Update Service',
    props<{ data: Service }>()
);

export const beginDeleteServices = createAction(
    '[Service/API] Begin Delete Services',
    // tslint:disable-next-line:no-any
    props<{ ids: any[] }>()
);

export const addService = createAction(
    '[Service/API] Add Service',
    props<{ data: Service }>()
);

export const upsertService = createAction(
    '[Service/API] Upsert Service',
    props<{ booking: Service }>()
);

export const addServices = createAction(
    '[Service/API] Add Services',
    props<{ data: Service[] }>()
);

export const upsertServices = createAction(
    '[Service/API] Upsert Services',
    props<{ bookings: Service[] }>()
);

export const updateService = createAction(
    '[Service/API] Update Service',
    props<{ data: Update<Service> }>()
);

export const updateServices = createAction(
    '[Service/API] Update Services',
    props<{ bookings: Update<Service>[] }>()
);

export const deleteService = createAction(
    '[Service/API] Delete Service',
    props<{ id: string }>()
);

export const deleteServices = createAction(
    '[Service/API] Delete Services',
    // tslint:disable-next-line:no-any
    props<{ ids: any[] }>()
);

export const clearServices = createAction('[Service/API] Clear Services');
