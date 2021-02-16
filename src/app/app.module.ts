import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseService } from './course.service';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [AppComponent, CourseComponent],
  imports: [BrowserModule],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
