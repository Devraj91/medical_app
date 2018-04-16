import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';


@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
  encapsulation: ViewEncapsulation.None
})



export class PersonalInformationComponent implements OnInit {



  constructor() { }
	

  
  
  ngOnInit() {
    /*//get years
    this.appService.getYears().subscribe(data=>{
      this.year=JSON.parse(data._body);
    },error=>{
      
    })

    //get date
    this.appService.getDate().subscribe(data=>{
      this.date=JSON.parse(data._body);
      console.log(this.date)
    },error=>{
      
    })

    //get month
    this.appService.getMonth().subscribe(data=>{
      this.month=JSON.parse(data._body);
      console.log(this.month)
    },error=>{
      
    })

    //onload personal Data
    this.appService.getDoctorPersonalInfo(this.id).subscribe(data=>{
      this.personalInfo=JSON.parse(data._body);
      this.personalInfoData=this.personalInfo.data;
      
      console.log(this.personalInfoData);
    }),error=>{

    }*/
  }
  ngAfterContentInit(){

  	
  }

  //submit personal form 
  submitPersonalData(){
  	/*this.appService.changePersonalInfo(this.id,this.personalInfoData).subscribe(data=>{

  		//close modal and redirect to dashboard
  		this.activeModal.close();
  		this.router.navigateByUrl('/dashboard');
  	}),error=>{

  	}*/
  }


}
