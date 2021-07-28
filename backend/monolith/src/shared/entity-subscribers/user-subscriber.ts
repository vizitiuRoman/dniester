import type {
    EntitySubscriberInterface,
    InsertEvent,
    UpdateEvent,
} from 'typeorm';
import { EventSubscriber } from 'typeorm';

import { UserEntity } from '../../modules/general/user/user.entity';
import { UtilsService } from '../../core/providers/utils.service';

@EventSubscriber()
export class UserSubscriber
    implements EntitySubscriberInterface<UserEntity> {
    listenTo() {
        return UserEntity;
    }
    beforeInsert(event: InsertEvent<UserEntity>) {
        if (event.entity.password) {
            event.entity.password = UtilsService.generateHash(
                event.entity.password,
            );
        }
    }
    beforeUpdate(event: UpdateEvent<UserEntity>) {
        if (event.entity.password !== event.databaseEntity.password) {
            event.entity.password = UtilsService.generateHash(
                event.entity.password,
            );
        }
    }
}
