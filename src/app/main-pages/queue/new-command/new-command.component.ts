import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-command',
  templateUrl: './new-command.component.html',
  styleUrls: ['./new-command.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NewCommandComponent {
  
  value= 'Clear me';

}
