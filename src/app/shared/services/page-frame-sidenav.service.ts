import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

// I make this service to dynamically use tabs
// In case of BookletRate, every instance must 
// containt starting point and arrival. !!
@Injectable({
    providedIn: "root"
})
export class PageFrameSidenavService {
    sidenavTitle: Subject<any> = new Subject<any>();
    sidenavTabs: Subject<any> = new Subject<any>();

    get sidenavCustomTabs$() {
        return this.sidenavTabs.asObservable();
    }

    get sidenavCustomTitle$() {
        return this.sidenavTitle.asObservable();
    }

    updateSidenavCustomTabs(tabs) {
        this.sidenavTabs.next(tabs);
    }

    notitySidenavTitle(title) {
        this.sidenavTitle.next(title);
    }
}