import { Component, ViewEncapsulation } from '@angular/core';
import { BaseColumnComponent } from './../../base-column/base-column.component';

@Component({
  selector: 'material-shared-actions-column',
  templateUrl: './material-shared-actions-column.component.html',
  styleUrls: ['./material-shared-actions-column.component.scss'],
  providers: [
    {
      provide: BaseColumnComponent,
      useExisting: MaterialSharedActionsColumnComponent
      // In the code above i need a dependency of a BaseColumn
      // and replace the curent component with the BaseColumn
      // !! So, that component is just a developed BaseColumn !!
    }
  ],
  encapsulation: ViewEncapsulation.None 
})

export class MaterialSharedActionsColumnComponent 
  extends BaseColumnComponent {

  constructor() {
    super() // This is called because that class extens anoter class
   }
}