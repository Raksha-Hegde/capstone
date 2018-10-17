import { Injectable } from '@angular/core';
import { User } from './user/user';
import { Http, Headers } from '@angular/http';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

    private USER_SERVICE_BASE_URL = 'http://localhost:8082/api/user';
    private AUNTHENTICATE = 'http://localhost:8081/login';
    private CREATEUSER = 'http://localhost:8082/user';
    headerObj = new Headers(
      {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    );
  getUsers() {
    console.log('Token : ', localStorage.getItem('token'));
    return this.http.get(this.USER_SERVICE_BASE_URL, {headers : this.headerObj});
  }
  authenticateUser(form) {
    return this.http.post(this.AUNTHENTICATE, form.value);
  }
  registerUser(form) {
    return this.http.post(this.CREATEUSER, form.value);
  }
}
