import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Service } from '@models/service.model';
import { CrudHttpService } from '@services/crud-http.service';
import { SERVICES_API } from '@constants/apis';

import { environment } from '@environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ServiceService extends CrudHttpService<Service, string> {
    constructor(protected httpClient: HttpClient) {
        super(httpClient, `${environment.API_URL}/${SERVICES_API.default}`);
    }
}
