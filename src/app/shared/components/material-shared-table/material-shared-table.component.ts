import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'material-shared-table',
  templateUrl: './material-shared-table.component.html',
  styleUrls: ['./material-shared-table.component.scss']
})
export class MaterialSharedTableComponent implements OnInit {
  @Input()sharedDataSource;
  @Input()displayedColumns;
  constructor() { }

  ngOnInit(): void {
    
  }

}
