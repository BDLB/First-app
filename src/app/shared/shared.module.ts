import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageFrameSidenavComponent } from './components/page-frame-sidenav/page-frame-sidenav.component';
 
@NgModule({
    declarations: [
        PageFrameSidenavComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PageFrameSidenavComponent
    ]
})
export class SharedModule {}