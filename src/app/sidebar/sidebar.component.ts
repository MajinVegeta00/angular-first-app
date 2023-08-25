import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  //?Attributes
  public image : string;
  constructor(private router:Router){
  this.image= ""
  }
  public teleport(url:string){
   this.router.navigate([`/${url}`])
  }
  ngOnInit():void{
    this.image= " https://picsum.photos/536/354"
    console.log("Cargo el SideBar");
    console.log(this.image);
  }

}
