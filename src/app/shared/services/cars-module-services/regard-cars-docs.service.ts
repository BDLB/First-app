import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RegardCarsDocsService {
  private _carsDocsInfo: BehaviorSubject<any>;
  constructor(
    private _httpClient: HttpClient
  ){
    this._carsDocsInfo = new BehaviorSubject(null);
  }

  get cardDocsInfo$(){
    return this._carsDocsInfo.asObservable();
  }

  getDocsInfoData(): Observable<any> {
    return this._httpClient.get(`
    https://9149d7d5-8a33-4351-b83a-87b8a4505018.mock.pstmn.io/cars/sidenav/documents
    `)
    .pipe(
      tap((response) =>{
        this._carsDocsInfo.next(response);
      })
    )
  }

}