import { AfterViewInit, 
  ChangeDetectorRef, 
  Component, 
  ContentChildren, 
  Input, 
  QueryList, ViewChild } from '@angular/core';
import { BaseColumnComponent } from './../../base-column/base-column.component';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'material-shared-table',
  templateUrl: './material-shared-table.component.html',
  styleUrls: ['./material-shared-table.component.scss']
})
export class MaterialSharedTableComponent implements AfterViewInit {
  @Input()sharedDataSource;

  // Fetch all the nested components which extends BaseColumnComponent
  @ContentChildren(BaseColumnComponent) 
  tableColumnsDefs: QueryList<BaseColumnComponent>;

  // Reference table for adding every column automatically
  @ViewChild(MatTable) table:any; 

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }
  
  columns: string[] = [];

  ngAfterViewInit() {
    // Optaining all columns name
    this.columns = this.tableColumnsDefs.map((colDef) => colDef.columnDef.name)
    this.tableColumnsDefs
      .map((colDef) => colDef.columnDef) // The iteration of QueryList
      .forEach((colDef) => this.table.addColumnDef(colDef)); // Add in table every column detected
      this._changeDetectorRef.detectChanges();
  }
}
