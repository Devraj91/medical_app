import { Component, OnInit, ViewEncapsulation,EventEmitter, Output,Input } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {

  constructor() { }

  @Output() selectComponent = new EventEmitter<String>();

  ngOnInit(){

  }

/*
  openSideNav(){
  	$(".sidenav").css("width","250px");	
  }

  closeSideNav(){
  	$(".sidenav").css("width","0px");	
  }
*/

  changeComponent(component){
    this.selectComponent.emit(component);
  }

}
