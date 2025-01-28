import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(public http:HttpClient) { }

  public  onLogIn(un:string|undefined,pw:string|undefined){
    
    return  this.http.post("https://localhost:44379/api/User/login/user" , {
        "userName": un,
        "password": pw
      }
    
     )
    
  }
}
