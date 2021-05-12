import { createFeatureSelector, createSelector } from '@ngrx/store';

import { servicesFeatureKey } from './service.reducer';
import * as fromService from './service.reducer';

export const selectServiceState = createFeatureSelector<fromService.State>(
    servicesFeatureKey
);

export const selectServiceIds = createSelector(
    selectServiceState,
    fromService.selectServiceIds
);
export const selectServiceEntities = createSelector(
    selectServiceState,
    fromService.selectServiceEntities
);
export const selectAllServices = createSelector(
    selectServiceState,
    fromService.selectAllServices
);
export const selectServiceTotal = createSelector(
    selectServiceState,
    fromService.selectServiceTotal
);
export const selectCurrentServiceId = createSelector(
    selectServiceState,
    fromService.getSelectedServiceId
);

export const selectCurrentService = createSelector(
    selectServiceEntities,
    selectCurrentServiceId,
    (entities, id) => (id ? entities[id] : {})
);
