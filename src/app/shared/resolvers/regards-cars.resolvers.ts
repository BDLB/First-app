import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RegardMainInfoService } from '../services/.services';

@Injectable({
  providedIn: 'root',
})
export class RegardsCarsConfigResolver implements Resolve<any> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return of(<any>{
      tabs: [
        {
          path: "info",
          title: "General"
        },
        {
          path: "docs",
          title: "Docs"
        },
        {
          path: "notes",
          title: "Notes"
        }
      ]
    })
  }
}

@Injectable({
  providedIn: "root"
})
export class RegardsCarsResolver implements Resolve<any> {
  constructor(
    private _regardMainInfoService: RegardMainInfoService,
  ) {}
  resolve (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // forkJoin = interested to a single request of one/many APIs !!
    return forkJoin([
      this._regardMainInfoService.getRegardMainInfo()
      .pipe(
        // Error here means the requested item is not available
        catchError((error) =>{
          // In console appears the error
          console.error(error);
          // Throw an error in console
          return throwError(error)
      })
      )
    ])
  }
}
