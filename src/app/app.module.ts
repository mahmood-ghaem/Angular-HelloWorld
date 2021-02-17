import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseService } from './course.service';
import { CourseComponent } from './course/course.component';
import { SummeryPipe } from './summery.pipe';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [AppComponent, CourseComponent, SummeryPipe, FavoriteComponent],
  imports: [BrowserModule, FormsModule],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
