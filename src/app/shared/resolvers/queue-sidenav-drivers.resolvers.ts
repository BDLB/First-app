import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { forkJoin, Observable, throwError } from "rxjs";
import { QueueSidenavDriversService } from "../services/.services";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn:"root"
})
export class QueueSidenavDriversResolver implements Resolve<any> {

    constructor(
        private _queueSidenavDriversService: QueueSidenavDriversService
    ){}

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<any> {
        // forkJoin = interested to a single request of one/many APIs !!
        return forkJoin([
            this._queueSidenavDriversService.getBookletDrivers().pipe(
                // catchError is executed when this API is not available !!
                catchError((error) =>{
                    // In console appears the error
                    console.error(error);
                    // Throw an error in console
                    return throwError(error)
                })
            ),
            this._queueSidenavDriversService.getAdditionalBookletDrivers().pipe(
                catchError((error) =>{
                    // error in console
                    console.error(error)
                    // throw the error
                    return throwError(error);
                })
            )
        ])
    }
}