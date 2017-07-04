import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [StudentService]
})
export class SigninComponent implements OnInit {
  login = {username: String, password: String};
  stat = '';
  constructor(private httpservice: StudentService, private route: Router) {
    this.login.username = this.login.password = null;
  }

  ngOnInit() {
  }
  submit() {
    this.httpservice.loginService(this.login).subscribe(res => {
      console.log(res);
      this.route.navigate(['/students/' + res.username]);
    });
  }
}
