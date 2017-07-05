import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {student} from '../student';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ValidateService} from '../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentService]
})
export class StudentsComponent implements OnInit {
   students: student[];
   student: student;
   studentinfo= {
     _id: String, roll_no: String,
   first_name: String,
   last_name: String,
   phone: String,
   email: String,
   };
   id: string;
  constructor(
    private studentService: StudentService,
    private route: Router,
    private route2: ActivatedRoute,
    private validateservice: ValidateService,
    private flashmessage: FlashMessagesService
  ) {     this.refresh(); }
  refresh() {
    this.route2.params.subscribe((param: Params) => {
      this.id = param['id'];
    });
    this.studentService.getService().subscribe(res => {
      this.students = res ;
      console.log(this.students);
       this.studentinfo.roll_no = this.studentinfo.first_name = this.studentinfo.last_name = null;
       this.studentinfo.phone = this.studentinfo.email = this.studentinfo._id = null;
    });
  }

  addstudent() {
    const newStudent = {
      roll_no: this.studentinfo.roll_no,
      first_name: this.studentinfo.first_name,
      last_name: this.studentinfo.last_name,
      phone: this.studentinfo.phone,
      email: this.studentinfo.email
    }
    if (!this.validateservice.valregister(newStudent)) {
      this.flashmessage.show('Fill all details', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    if (!this.validateservice.valemail(newStudent.email)) {
      this.flashmessage.show('Use valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    this.studentService.addstudent(newStudent)
      .subscribe(student => {
        this.students.push(student);
        this.studentService.getstudents()
          .subscribe( students =>
            this.students = students);
        this.refresh();
      });

  }



  update() {
    console.log(this.studentinfo._id);
    this.studentService.update(this.studentinfo._id, this.studentinfo).subscribe(res => {
      console.log(res);
      this.flashmessage.show('Update success', {cssClass: 'alert-success', timeout: 3000});
      this.refresh();
    });
  }

  deletestudent(id: any) {
    const students = this.students;
    this.studentService.deletestudent(id)
      .subscribe(data => {
        if (data.n === 1) {
          for ( let i = 0; i < students.length; i++) {
            if (students[i]._id === id) {
              students.splice(i, 1);
              this.flashmessage.show('Delete success', {cssClass: 'alert-success', timeout: 3000});
            }
          }
        }
      })
  }
  editstudent(id) {
    console.log(id);
    this.studentService.editstudent(id).subscribe(res => {
      console.log('data to be edited is' + res);
      this.studentinfo = res;
    });
  }

  getstudents() {
    this.studentService.getstudents()
      .subscribe( students =>
        this.students = students);
  }
logout() {
  this.studentService.logoutService().subscribe(res => {
    console.log('data to be edited is' + res);
    this.flashmessage.show('Loged out successfully', {cssClass: 'alert-success', timeout: 3000});
    this.route.navigate(['']);
  });
}
  ngOnInit() {
    this.getstudents();
  }

}
