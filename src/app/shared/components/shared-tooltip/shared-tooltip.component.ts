import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-tooltip',
  templateUrl: './shared-tooltip.component.html',
  styleUrls: ['./shared-tooltip.component.scss']
})
export class SharedTooltipComponent implements OnInit {
  @Input()tooltipConfig?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
