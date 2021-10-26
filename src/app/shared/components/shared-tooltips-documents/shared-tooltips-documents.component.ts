import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shared-tooltips-documents',
  templateUrl: './shared-tooltips-documents.component.html',
  styleUrls: ['./shared-tooltips-documents.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedTooltipsDocumentsComponent implements OnInit {
  @Input() overlayRef: OverlayRef;
  viewDocumentsTooltipConfig: any;
  constructor() { }

  ngOnInit(): void {}

}
