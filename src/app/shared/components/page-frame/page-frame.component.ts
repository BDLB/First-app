import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { pageFrameConfig } from './page-frame.config';

@Component({
  selector: 'app-page-frame',
  templateUrl: './page-frame.component.html',
  styleUrls: ['./page-frame.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageFrameComponent implements OnInit {
  pageConfiguration: any;
  constructor() { }

  ngOnInit(): void {
    this.pageConfiguration = pageFrameConfig.queue.mainpage;
  }

}
