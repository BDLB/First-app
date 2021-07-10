import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'material-shared-text-column',
  templateUrl: './material-shared-text-column.component.html',
  styleUrls: ['./material-shared-text-column.component.scss']
})
export class MaterialSharedTextColumnComponent implements OnInit {
  @Input()columnName: string;
  @Input()label: string;
  constructor() { }

  ngOnInit(): void {
  }

}
