import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {student} from '../student';

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
  constructor(private studentService: StudentService) {     this.refresh(); }

  refresh() {
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
      this.refresh();
    });
  }

  deletestudent(id: any) {
    var students = this.students;
    this.studentService.deletestudent(id)
      .subscribe(data => {
        if (data.n === 1) {
          for ( var i = 0; i < students.length; i++) {
            if (students[i]._id === id) {
              students.splice(i, 1);
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

  ngOnInit() {
    this.getstudents();
  }

}
