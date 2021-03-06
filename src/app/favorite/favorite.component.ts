import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.isFavorite = !this.isFavorite;
    //this.change.emit(this.isFavorite);
    this.click.emit({ newValue: this.isFavorite });
  }
}
export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
