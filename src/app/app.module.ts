import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppService } from './service/app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './common/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ModalComponent } from './common/modal/modal.component';
import { ProfessionalInformationComponent } from './pages/professional-information/professional-information.component';
import { PersonalInformationComponent } from './pages/personal-information/personal-information.component';
import { PracticeInformationComponent } from './pages/practice-information/practice-information.component';
import { RegistrationInformationComponent } from './pages/registration-information/registration-information.component';
import { AffiliationsComponent } from './pages/affiliations/affiliations.component';
import { EducationAndTrainingComponent } from './pages/education-and-training/education-and-training.component';
import { PracticeTimingComponent } from './pages/practice-timing/practice-timing.component';
import { AddSlotTemplateComponent } from './common/add-slot-template/add-slot-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './common/loader/loader.component';
import { AuthGuard } from './authentication/AuthGuard';
import { UserService } from './authentication/userService';
import { SignInNavbarComponent } from './common/sign-in-navbar/sign-in-navbar.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { DoctorNavbarComponent } from './common/doctor-navbar/doctor-navbar.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { SearchComponent } from './common/search/search.component';
import { AppointmentsReviewComponent } from './pages/appointments-review/appointments-review.component';
import { ChatRequestComponent } from './pages/chat-request/chat-request.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { PatientGroupComponent } from './common/patient-group/patient-group.component';
import { AvailiabilityComponent } from './pages/availiability/availiability.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorPageComponent,
    NavbarComponent,
    DashboardComponent,
    ModalComponent,
    ProfessionalInformationComponent,
    PersonalInformationComponent,
    PracticeInformationComponent,
    RegistrationInformationComponent,
    AffiliationsComponent,
    EducationAndTrainingComponent,
    PracticeTimingComponent,
    AddSlotTemplateComponent,
    LoaderComponent,
    SignInNavbarComponent,
    ResetPasswordComponent,
    DoctorNavbarComponent,
    SideNavComponent,
    SearchComponent,
    AppointmentsReviewComponent,
    ChatRequestComponent,
    AppointmentsComponent,
    PatientGroupComponent,
    AvailiabilityComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  entryComponents:[LoaderComponent,ModalComponent,ProfessionalInformationComponent,PersonalInformationComponent,PracticeInformationComponent,RegistrationInformationComponent,AffiliationsComponent,EducationAndTrainingComponent,PracticeTimingComponent],
  providers: [AppService,AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
