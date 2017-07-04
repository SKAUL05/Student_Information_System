import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { SigninComponent } from './signin/signin.component';
import {RouterModule, Routes} from '@angular/router';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
