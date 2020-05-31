import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [StudentService]
})
export class SigninComponent implements OnInit {
  login = {username: String, password: String};
  stat = '';
  constructor(private httpservice: StudentService, private route: Router, private flashmessage: FlashMessagesService) {
    this.login.username = this.login.password = null;
  }

  ngOnInit() {
  }
  submit() {
    this.httpservice.loginService(this.login).subscribe(res => {
      console.log(res);
      if (res.flag) {
        this.route.navigate(['/students/' + res.user]);
      } else {
        this.flashmessage.show('Invalid Credentials',{cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }
}
