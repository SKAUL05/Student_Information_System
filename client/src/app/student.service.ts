import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {student} from './student';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  constructor(private http: Http) { }
  getstudents() {
    return this.http.get('http://localhost:3000/api/student')
      .map(res => res.json());
  }

  // add student info method
  addstudent(newstudent) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/student', newstudent, {headers: headers})
      .map(res => res.json());
  }

  // deleting student information
  deletestudent(id) {
    return this.http.delete('http://localhost:3000/api/student/' + id)
      .map(res => res.json());
  }

  update(id, upDatedContact) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('in update' + id);
    return this.http.put('http://localhost:3000/api/student/' + id, upDatedContact, headers).map(res => res.json());
  }
  editstudent(id) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/api/student/' + id).map(res => res.json());
  }
  getService() {
    console.log('http service started..');
    return this.http.get('http://localhost:3000/api/student/').map(res => res.json());
  }

}
