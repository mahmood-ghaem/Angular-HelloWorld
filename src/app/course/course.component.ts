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
  isActive = false;
  colSpan = 2;

  onSave($event) {
    console.log('Save clicked!', $event);
    $event.stopPropagation();
  }

  onKeyUp($event) {
    if ($event.keyCode === 13) console.log('enter Pressed!');
  }

  onKeyUpFilter() {
    console.log('enter Pressed by filter!');
  }

  getValue1($event) {
    console.log('this is value', $event.target.value);
  }

  getValue2(email: string) {
    console.log('this is email', email);
  }

  userName = 'Mahmood';

  twoWayBinding() {
    console.log('this is userName', this.userName);
  }

  myObj = {
    title: 'The complete Angular course.',
    rating: 4.9745,
    students: 30123,
    price: 190.955,
    releaseDate: new Date(2021, 3, 16),
  };
}
