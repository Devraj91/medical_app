import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from './../../service/app.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './../../common/modal/modal.component';

import { ProfessionalInformationComponent } from './../../pages/professional-information/professional-information.component';
import { PersonalInformationComponent } from './../../pages/personal-information/personal-information.component';
import { PracticeInformationComponent } from './../../pages/practice-information/practice-information.component';
import { RegistrationInformationComponent } from './../../pages/registration-information/registration-information.component';
import { AffiliationsComponent } from './../../pages/affiliations/affiliations.component';
import { EducationAndTrainingComponent } from './../../pages/education-and-training/education-and-training.component';
import { PracticeTimingComponent } from './../../pages/practice-timing/practice-timing.component';
import * as jQuery from 'jquery';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  availiability: boolean;

  
  dashboard:boolean=false;
  availability:boolean=false;

  ngOnInit() {
    this.dashboard=true;
  }

  resetAll(){
    this.dashboard=false;
    this.availability=false;
  }


  menuToggle(response){
    console.log("response",response);
    var boxsize=$(".sidenav").width();
    if(!response){
      $(".sidenav").animate({
        width:0
      },function(){
        $(".list").hide()
        $(".side-navbar").animate({
          width:100
        })
      })
    }
    else{
      $(".sidenav").animate({
        width: 193
      },function(){
        $(".side-navbar").animate({
          width:200
        })
      })
      $(".list").show(1000)
    }
  }



  //change component using angular 4
  changeComponent(response){
    this.resetAll();
    console.log(response);
    switch(response){
      case 'availiable': this.availability=true;
                         break;
                         
      case 'dashboard': this.dashboard=true;
                         break;
      case 'availiability': this.availiability = true;
                         break;
    }
  }

}
