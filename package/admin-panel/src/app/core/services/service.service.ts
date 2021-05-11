import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Service } from '@models/service.model';
import { SERVICES_API } from '@constants/apis';
import { environment } from '@environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ServiceService {
    constructor(private httpClient: HttpClient) {}

    public getServices(): Observable<Service[]> {
        return this.httpClient.get<Service[]>(
            `${environment.API_URL}/${SERVICES_API.default}`
        );
    }

    public getService(id: string): Observable<Service[]> {
        return this.httpClient.get<Service[]>(
            `${environment.API_URL}/${SERVICES_API.default}`
        );
    }
}
