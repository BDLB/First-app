import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class QueueSidenavDriversService {
    private _sidenavDriversBSubject: BehaviorSubject<any>
    private _sidenavAdditionalDriversBSubject: BehaviorSubject<any>

    constructor(
        private _httpClient: HttpClient, 
    ) {
        // Setting the default values... !!
        this._sidenavDriversBSubject = new BehaviorSubject(null);
        this._sidenavAdditionalDriversBSubject = new BehaviorSubject(null);
    }

    /**
     * Getter for sidenav drivers Data Source 
     */
    get queueSidenavDrivers$(): Observable<any>{
        return this._sidenavDriversBSubject.asObservable();
    }

    /**
     * Getter for sidenav Additional drivers Data Source 
     */
     get queueAdditionalSidenavDrivers$(): Observable<any>{
        return this._sidenavAdditionalDriversBSubject.asObservable();
    }

    getBookletDrivers(): Observable<any>{
        return this._httpClient
        .get<any>(`https://e4820c2c-2918-4763-970e-8e796f13084c.mock.pstmn.io/bookDriver`)
        .pipe(
            // tap used for notifications. Doesn't alter !!
            tap((driver) =>{
                this._sidenavDriversBSubject.next(driver)
            })
        )
    }

    getAdditionalBookletDrivers(): Observable<any> {
        return this._httpClient
        .get<any>(`https://ee9c56d5-9c80-414d-ac8b-6737d67606a3.mock.pstmn.io/bookletDriver`)
        .pipe(
            tap((additionalDriverInfo) => {
                this._sidenavAdditionalDriversBSubject.next(additionalDriverInfo);
            })
        )
    }
}