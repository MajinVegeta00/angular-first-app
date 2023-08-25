import { Component, OnInit } from '@angular/core';
import { DataFromCardToFavoritesService } from '../data-from-card-to-favorites.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  public favorites: Array<any> = [];
  constructor(
    private dataFromCardFavoriteService: DataFromCardToFavoritesService
  ) {}
  ngOnInit() {
    this.dataFromCardFavoriteService.sendOrReciveDdata.subscribe((data) => {
      console.log('Recibiendo data', data);
      this.favorites.push(data.data);
    });
  }
}
