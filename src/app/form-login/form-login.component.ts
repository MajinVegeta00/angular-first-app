import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  public formLogin: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private rest: RestService,private router:Router, private cookie:CookieService) {}
  public onSend() {
    this.rest
      .post('http://localhost:9000/api/auth/login', this.formLogin.value)
      .subscribe((res:any) => {
        console.log(res);
        this.formLogin.reset();
        this.router.navigate(['/home'])
        
      });
  }
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.minLength(6)]],
      terms: ['', [Validators.required, Validators.requiredTrue]],
    });
    const cook= this.cookie.getAll()
    console.log('=====>cookies desde form',cook);
  }
}
