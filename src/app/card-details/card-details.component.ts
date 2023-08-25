import { RestService } from '../rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent implements OnInit {
  public details: any;
  public id: any;
  public form: FormGroup = new FormGroup({});
  public comments: any;
  constructor(
    private rest: RestService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  public fetchData(id: string) {
    console.log(this.id);
    this.rest
      .fetchData(`http://localhost:9000/api/post/getById/${id}`)
      .subscribe((data) => {
        console.log(data);
        this.details = data;
      });
  }

  public onSend() {
    console.log('submitando');
    const res = this.rest
      .post(`http://localhost:9000/api/comment/create`, {
        postId: this.form.value.postId,
        comment: this.form.value.comment,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }

  public getComments() {
    this.rest
      .fetchData(`http://localhost:9000/api/comment/getByPost/${this.id}`)
      .subscribe((res) => {
        this.comments = res;
        console.log(this.comments);
      });
  }

  ngOnInit(): void {
    console.log('Entrando');
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
    this.fetchData(this.id);
    this.form = this.formBuilder.group({
      comment: [''],
      postId: this.id,
    });

    this.getComments();
  }
}
