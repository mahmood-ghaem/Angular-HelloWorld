import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World!!!!';
  post = {
    title: 'Title',
    isSelected: true,
  };

  onFavoriteChanged(isFavorite) {
    console.log('Favorite Changed to ' + isFavorite);
  }
}
