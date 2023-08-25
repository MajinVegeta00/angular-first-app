import { ColumnMode } from '@swimlane/ngx-datatable';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RestService } from '../rest.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-card-comments',
  templateUrl: './card-comments.component.html',
  styleUrls: ['./card-comments.component.css'],
})
export class CardCommentsComponent implements OnInit {
  public columns:Array<any> = [];
  public rows:any = [];
  constructor(private rest: RestService) {}

  public getData(){
    this.rest.fetchData('http://localhost:9000/api/post/get').subscribe(data=>{
    console.log(data);
    this.rows=data
    console.log(this.rows);
    })
  }
  ngOnInit(): void {
    
    this.getData()
  }
}
