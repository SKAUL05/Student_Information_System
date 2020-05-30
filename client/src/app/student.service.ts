import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {student} from './student';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  constructor(private http: Http) { }
  getstudents() {
    return this.http.get('/api/student')
      .map(res => res.json());
  }

  // add student info method
  addstudent(newstudent) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/student', newstudent, {headers: headers})
      .map(res => res.json());
  }

  // deleting student information
  deletestudent(id) {
    return this.http.delete('/api/student/' + id)
      .map(res => res.json());
  }

  update(id, upDatedContact) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('in update' + id);
    return this.http.put('/api/student/' + id, upDatedContact, headers).map(res => res.json());
  }
  editstudent(id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('/api/student/' + id).map(res => res.json());
  }
  getService() {
    console.log('http service started..');
    return this.http.get('/api/student/').map(res => res.json());
  }
  loginService(login: object) {
    console.log("login");
    return this.http.post('/api/logindata', login).map(res => res.json());
  }
  logoutService() {
    console.log('logout');
    return this.http.get('0/api/logout').map(res => res.json());
  }


}
