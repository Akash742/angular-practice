import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-statement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-statement.component.html',
  styleUrl: './for-statement.component.css'
})
export class ForStatementComponent {
  courses = [
    { id : 1001, name : "Course1"},
    { id : 1002, name : "Course2"},
    { id : 1003, name : "Course3"}
  ];

  addCourse() {
    this.courses.push({ id: 1004, name: "Course4"})
  }

  removeCourse(i: number) {
    this.courses.splice(i, 1);
  }
}
