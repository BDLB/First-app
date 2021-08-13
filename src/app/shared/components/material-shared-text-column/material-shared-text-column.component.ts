import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseColumnComponent } from '../base-column/base-column.component';

@Component({
  selector: 'material-shared-text-column',
  templateUrl: './material-shared-text-column.component.html',
  styleUrls: ['./material-shared-text-column.component.scss'],
  providers: [
    {
      provide: BaseColumnComponent,
      useExisting: MaterialSharedTextColumnComponent
      // That's about DI. I don't know why i need that ?!
      // What is the purpose of useExisting ?!
    }
  ],
  encapsulation: ViewEncapsulation.None 
})
export class MaterialSharedTextColumnComponent 
  extends BaseColumnComponent 
  implements OnInit {

  @Input()name: string;
  @Input()columnLabel: string;
  constructor() {
    super() 
    // This is called because that class extens anoter class
   }

  ngOnInit(): void {
  }
}
