import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadServices } from '@store/service/service.actions';
import { State } from '@store/index';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
    constructor(private store: Store<State>) {}

    ngOnInit(): void {
        this.store.dispatch(loadServices());
    }
}
