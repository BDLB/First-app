import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trans';
  way: string ="queue";

  Navigation(decision:string) {
    this.way = decision;
  }
}
