import { Injectable } from '@angular/core';
@Injectable()
export class ValidateService {

  constructor() {}
  valregister(newStudent) {
    console.log('valregister');
  if (newStudent.roll_no == null || newStudent.first_name == null ||  newStudent.phone == null || newStudent.last_name == null) {
    return false;
  }
  return true;
}
  valemail(email) {
    console.log('valemail');
    const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
  }
}
