import { BaseModel, Create } from '@models/base.model';
import { Observable } from 'rxjs';

export interface CrudRepository<T extends BaseModel<ID>, ID> {
    save(t: Create<T, ID>): Observable<T>;
    update(id: ID, t: T): Observable<T>;
    findOne(id: ID): Observable<T>;
    findAll(): Observable<T[]>;
    delete(id: ID): Observable<{ count: number }>;
    deleteByIDS(ids: ID[]): Observable<{ count: number }>;
}
