import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseModel, Create } from '@models/base.model';

import { Observable } from 'rxjs';

import { CrudRepository } from '@interfaces/crud-repository.interface';

@Injectable({
    providedIn: 'root',
})
export abstract class CrudHttpService<T extends BaseModel<ID>, ID>
    implements CrudRepository<T, ID> {
    protected constructor(
        protected httpClient: HttpClient,
        protected url: string
    ) {}

    public save(t: Create<T, ID>): Observable<T> {
        return this.httpClient.post<T>(this.url, t);
    }

    public update(id: ID, t: T): Observable<T> {
        return this.httpClient.put<T>(this.url + '/' + id, t, {});
    }

    public findOne(id: ID): Observable<T> {
        return this.httpClient.get<T>(this.url + '/' + id);
    }

    public findAll(): Observable<T[]> {
        return this.httpClient.get<T[]>(this.url);
    }

    public delete(id: ID): Observable<{ count: number }> {
        return this.httpClient.delete<{ count: number }>(this.url + '/' + id);
    }

    public deleteByIDS(ids: ID[]): Observable<{ count: number }> {
        return this.httpClient.post<{ count: number }>(this.url + '/delete', {
            ids,
        });
    }
}
