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
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet possimus vero quidem impedit perspiciatis? Perferendis vero voluptates inventore ea modi tempore ullam quam dolor expedita in? Ratione unde aliquam cum, rerum in quibusdam tenetur odit, nobis molestias natus dolores illum quo? Est eveniet doloribus ut maxime nisi molestiae quia, quaerat cumque nemo animi saepe modi sint dolore. Illo, corporis quaerat et quod voluptate odit, debitis architecto, suscipit rerum repellendus nihil enim eum eius? Reiciendis eveniet consequatur at! Atque itaque iusto velit autem quae minima tempora, dolorum mollitia. Delectus alias perspiciatis, debitis eos illum nisi suscipit veritatis. Dolorem aspernatur vero quod similique adipisci id, est eum. Aut quasi ex vero iusto, magni consequuntur exercitationem perspiciatis corrupti cum ad amet error magnam et blanditiis sequi eveniet obcaecati praesentium beatae necessitatibus quos ducimus quibusdam culpa! Amet veniam cupiditate nulla porro accusamus aspernatur dolorum ipsam fugiat expedita inventore sequi fugit delectus ab dolores quas culpa, sit voluptates nesciunt quisquam harum quae impedit blanditiis omnis temporibus! Dicta temporibus quidem quia explicabo cum. Delectus impedit amet provident veritatis corrupti perspiciatis eius, doloremque ipsam quasi harum, non saepe molestiae vitae, laudantium expedita recusandae ullam rem? Architecto tempora eveniet culpa temporibus pariatur inventore ab, sint explicabo dicta molestias!',
  };
}
