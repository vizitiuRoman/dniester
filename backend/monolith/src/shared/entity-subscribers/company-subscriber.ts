import type {
    EntitySubscriberInterface,
    InsertEvent,
    UpdateEvent,
} from 'typeorm';
import { EventSubscriber } from 'typeorm';

import { CompanyEntity } from '../../modules/general/company/company.entity';
import { UtilsService } from '../../core/providers/utils.service';

@EventSubscriber()
export class CompanySubscriber
    implements EntitySubscriberInterface<CompanyEntity> {
    listenTo() {
        return CompanyEntity;
    }
    beforeInsert(event: InsertEvent<CompanyEntity>) {
        if (event.entity.password) {
            event.entity.password = UtilsService.generateHash(
                event.entity.password,
            );
        }
    }
    beforeUpdate(event: UpdateEvent<CompanyEntity>) {
        if (event.entity.password !== event.databaseEntity.password) {
            event.entity.password = UtilsService.generateHash(
                event.entity.password,
            );
        }
    }
}
