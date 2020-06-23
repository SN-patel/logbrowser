import {Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'main-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.css'],
})
export class LayoutComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 10, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 3, rows: 8, color: 'lightpink'},
  ];
}
