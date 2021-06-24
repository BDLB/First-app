import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PageFrameSidenavService {
    sidenavOpened: boolean = false;
    private _sidenavSwitch = new BehaviorSubject<boolean>(false)

    // Getter for _sidenavSwitch
    get sidenavSwitch(): Observable<boolean> {
       return this._sidenavSwitch.asObservable()
    }

    switchSidenav() {
        this._sidenavSwitch.next(!this.sidenavOpened)
    }
}
