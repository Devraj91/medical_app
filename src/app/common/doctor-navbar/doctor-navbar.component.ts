import { Component, OnInit, ViewEncapsulation,EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-doctor-navbar',
  templateUrl: './doctor-navbar.component.html',
  styleUrls: ['./doctor-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DoctorNavbarComponent implements OnInit {


  constructor() { }

  @Output() toggleMenu = new EventEmitter<boolean>();
  
  public isCollapsed = true;

  ngOnInit() {
  }

  toggleMenuEvent(){
  	this.isCollapsed = !this.isCollapsed;
  	this.toggleMenu.emit(this.isCollapsed);
  }

}
