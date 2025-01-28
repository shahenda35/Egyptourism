import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators,FormBuilder,} from '@angular/forms';
import { LogService } from '../../services/log.service';
import{ CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  username : string | undefined ;
  password : string | undefined ;
  constructor(public LogS: LogService, private f: FormBuilder , private cookie:CookieService) {}

  ngOnInit(): void {}

  loginForm: FormGroup = this.f.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onLogin() {
    if (this.loginForm?.valid) {
      const data = this.LogS.onLogIn(this.username , this.password).subscribe((data:any)=>{
        console.log(data['token']);
        this.cookie.set('jwt',data['token'])

      },(error:any)=>{
        console.log(error)
      });
      
    }
  }
}
