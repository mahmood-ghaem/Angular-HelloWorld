import { CourseService } from '../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  // Dependency Injection
  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {}
  title = 'List of course!';
  courses;
}
