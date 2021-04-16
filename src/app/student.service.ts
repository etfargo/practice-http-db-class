import { Injectable } from "@angular/core";
import { Student } from "./student";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  STUDENTS: Student[] = [];

  constructor(private http: HttpClient) {}

  addStudent(newStd: Student) {
    //first arg is firebase link with path. 2nd is item
    return this.http.post(
      "https://studentinfo-6a345-default-rtdb.firebaseio.com/" + "student.json",
      newStd
    );
  }

  getStudentdata() {
    return this.http
      .get<Student[]>(
        "https://studentinfo-6a345-default-rtdb.firebaseio.com/student.json"
      )
      .pipe(
        map(data => {
          let sArr: Student[] = [];
          for (let key in data) {
            sArr.push(data[key]);
          }
          return sArr;
        })
      );
  }

  clearData() {
    return this.http.delete(
      "https://studentinfo-6a345-default-rtdb.firebaseio.com/" + "student.json"
    );
  }
}
