import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

// I make this service to dynamically use tabs
// In case of BookletRate, every instance must 
// containt starting point and arrival. !!
@Injectable({
    providedIn: "root"
})
export class PageFrameSidenavService {
    sidenavTabs: Subject<any> = new Subject<any>();

    get sidenavCustomTabs$() {
        return this.sidenavTabs.asObservable();
    }

    updateSidenavCustomTabs(tabs) {
        this.sidenavTabs.next(tabs);
    }
}