import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public cards:any=[]
  constructor(private RestService:RestService){}
ngOnInit(): void {
  const data=this.RestService.fetchData(`http://localhost:9000/api/post/get`).subscribe(data=>{
    this.cards=data
   })
   console.log(this.cards);
}
}
