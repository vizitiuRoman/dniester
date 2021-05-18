import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CreateEffectMetadata } from '@ngrx/effects/src/models';
import { Update } from '@ngrx/entity';
import { ActionCreator, TypedAction } from '@ngrx/store/src/models';

import { map, mergeMap } from 'rxjs/operators';

import { CrudRepository } from '@interfaces/crud-repository.interface';
import { BaseModel, Create } from '@models/base.model';

interface CrudEffectRepository {
    findAll$: CreateEffectMetadata;
    save$: CreateEffectMetadata;
    update$: CreateEffectMetadata;
    delete$: CreateEffectMetadata;
}

@Injectable()
export class CrudEffect<T extends BaseModel<ID>, ID>
    implements CrudEffectRepository {
    constructor(
        private actions$: Actions,
        private repo: CrudRepository<T, ID>,
        private loadAll: ActionCreator<string, () => TypedAction<string>>,
        private addMore: ActionCreator<
            string,
            (data: { data: T[] }) => { data: T[] } & TypedAction<string>
        >,
        private addOne: ActionCreator<
            string,
            (data: { data: T }) => { data: T } & TypedAction<string>
        >,
        private update: ActionCreator<
            string,
            (data: {
                data: Update<T>;
            }) => { data: Update<T> } & TypedAction<string>
        >,
        private deleteMore: ActionCreator<
            string,
            (data: { ids: ID[] }) => { ids: ID[] } & TypedAction<string>
        >,
        private beginCreate: ActionCreator<
            string,
            (data: {
                data: Create<T, ID>;
            }) => { data: Create<T, ID> } & TypedAction<string>
        >,
        private beginUpdate: ActionCreator<
            string,
            (data: { data: T }) => { data: T } & TypedAction<string>
        >,
        private beginDelete: ActionCreator<
            string,
            (data: { ids: ID[] }) => { ids: ID[] } & TypedAction<string>
        >
    ) {}

    findAll$ = createEffect(() =>
        this.actions$.pipe(
            ofType(this.loadAll),
            mergeMap(() =>
                this.repo.findAll().pipe(
                    map((data) => this.addMore({ data }))
                    // catchError() // TODO - add global error handler
                )
            )
        )
    );

    save$ = createEffect(() =>
        this.actions$.pipe(
            ofType(this.beginCreate),
            mergeMap((action) =>
                this.repo.save(action.data).pipe(
                    map((data) => this.addOne({ data }))
                    // catchError() // TODO - add global error handler
                )
            )
        )
    );

    update$ = createEffect(() =>
        this.actions$.pipe(
            ofType(this.beginUpdate),
            mergeMap((action) =>
                this.repo.update(action.data.id, action.data).pipe(
                    map((data) => this.addOne({ data }))
                    // catchError() // TODO - add global error handler
                )
            )
        )
    );

    delete$ = createEffect(() =>
        this.actions$.pipe(
            ofType(this.beginDelete),
            mergeMap((action) =>
                this.repo.deleteByIDS(action.ids).pipe(
                    map(() => this.deleteMore({ ids: action.ids }))
                    // catchError() // TODO - add global error handler
                )
            )
        )
    );
}
