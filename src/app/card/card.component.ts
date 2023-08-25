import { Component, Input,Output } from '@angular/core';
import { DataFromCardToFavoritesService } from '../data-from-card-to-favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() props: any;
  public tittle:string="";
  public body:string=""; 
  public imgURL:string='../../assets/images/AngulaJS-Icon.png'
  constructor(private dataFromCardToFavoriteService:DataFromCardToFavoritesService,private router:Router ){

  };
  sendDataToFav(){
    this.dataFromCardToFavoriteService.sendOrReciveDdata.emit({data:this.props})
    console.log("Emitiendo la data",this.props);
}
sendDataToDetails(){
  console.log("me mando");
  const params={id:this.props.id}
  this.router.navigate(['/card'],{queryParams:params})
  console.log("si");
}
}
