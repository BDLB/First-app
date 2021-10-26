import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseColumnComponent } from '../../base-column/base-column.component';

@Component({
  selector: 'material-shared-text-column',
  templateUrl: './material-shared-text-column.component.html',
  styleUrls: ['./material-shared-text-column.component.scss'],
  providers: [
    {
      provide: BaseColumnComponent,
      useExisting: MaterialSharedTextColumnComponent
      // In the code above i need a dependency of a BaseColumn
      // and replace the curent component with the BaseColumn
      // !! So, that component is just a developed BaseColumn !!
    }
  ],
  encapsulation: ViewEncapsulation.None 
})
export class MaterialSharedTextColumnComponent 
  extends BaseColumnComponent 
  implements OnInit {

    @Input() contentEditable: boolean = false;

  constructor() {
    super() // This is called because that class extens anoter class
   }

  ngOnInit(): void {
  }
}
