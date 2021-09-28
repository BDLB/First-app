import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RegardMainInfoService {
  private _regardCarsInfo: BehaviorSubject<any>;
  constructor(
    private _httpClient: HttpClient
  ) {
    this._regardCarsInfo = new BehaviorSubject(null)
  }

  get regardCarsInfo$ () {
    return this._regardCarsInfo.asObservable();
  }

  getRegardMainInfo(): Observable<any>{
    return this._httpClient.get<any>(
      `https://23d14dea-c248-4e37-9ff0-8c9d28c21fb5.mock.pstmn.io/cars/sidenav/info`
    )
    .pipe(
      tap((response) =>{
        this._regardCarsInfo.next(response);
      })
    )
  }
}