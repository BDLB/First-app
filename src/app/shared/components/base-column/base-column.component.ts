import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatColumnDef } from '@angular/material/table';

@Component({
  selector: 'app-base-column',
  templateUrl: './base-column.component.html',
  styleUrls: ['./base-column.component.scss']
})
export class BaseColumnComponent implements OnInit {

  /**
   * This is the column name
   */
  @Input() name?: any;

  /**
   * The label of the column
   */
  @Input() columnLabel?: string;

  /**
   * The class applied at header cells
   */
  @Input() headerClass?: string;

  /**
   * The Class applied at data cells
   */
  @Input() dataClass?: string;

  /**
   * The reference for column definition. With that i target every column
   * definition, so I can extract every column name with that line of code.
   */
  @ViewChild(MatColumnDef) columnDef: MatColumnDef;

  ngOnInit(): void {
  }

}
