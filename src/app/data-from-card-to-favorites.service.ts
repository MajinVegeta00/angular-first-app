import { EventEmitter, Injectable,Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFromCardToFavoritesService {
  @Output() sendOrReciveDdata:EventEmitter<any>=new EventEmitter()
  constructor() { }
}
