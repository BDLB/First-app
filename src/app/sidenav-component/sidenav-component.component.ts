import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-component',
  templateUrl: './sidenav-component.component.html',
  styleUrls: ['./sidenav-component.component.scss']
})
export class SidenavComponent implements OnInit {
  login_name: string = "Bodi"
  constructor() { }

  ngOnInit(): void {
  }

  navOpen(){
    let navigation = document.getElementById('sidenav-navigation').clientWidth;
    if ( navigation === 77) {
      document.getElementById("sidenav-navigation").style.width = "210px";
      document.getElementById("content-main-pages").style.marginLeft = "133px";
    } else {
      document.getElementById("sidenav-navigation").style.width = "77px";
      document.getElementById("content-main-pages").style.marginLeft = "0px";
    }
  }

}
