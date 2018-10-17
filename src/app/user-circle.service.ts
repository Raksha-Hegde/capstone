import { Injectable } from '@angular/core'
import { Http,Headers } from "@angular/http";

@Injectable()
export class UserCircleService {

  constructor(private http:Http) { }
  

  private USERCIRCLE_SERVICE_BASE_URL = 'http://localhost:8085/api/usercircle/addToCircle/';
  headerObj = new Headers(
    {'Authorization':'Bearer '+localStorage.getItem('token')}
  );

  addUserToCircle(user, circle){
    console.log('User : ', user);
    console.log('Circle : ', circle);
    return this.http.put(this.USERCIRCLE_SERVICE_BASE_URL+user +'/'+circle,{headers : this.headerObj});
  }
}
