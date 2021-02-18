import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
