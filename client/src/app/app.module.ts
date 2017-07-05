import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { SigninComponent } from './signin/signin.component';
import {RouterModule, Routes} from '@angular/router';
import {ValidateService} from './services/validate.service';
import {StudentService} from './student.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
const appRoutes: Routes = [
  {path: '' , component: SigninComponent},
  {path: 'students/:id' , component: StudentsComponent}
];


@NgModule({
  declarations: [
    SigninComponent,
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
