import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any;
  constructor(private userservice: UserService, private router: Router) { }
  loginUser(form: NgForm) {
    console.log('under login methed');
    this.userservice.authenticateUser(form).subscribe(
      data => {
        if (data.status === 200) {
          this.userData = data.json();
          localStorage.setItem('token', this.userData.token);
          localStorage.setItem('username', form.value.username);
          this.router.navigate(['dashboard']);
          location.reload();
        } else {
          alert('Something went wrong, please try after sometime');
          this.router.navigate(['']);
        }
      },
      error => {
        if (error.status === 401) {
          alert('Invalid username or password');
          this.router.navigate(['']);
        } else {
          alert('Something went wrong, please try after sometime');
          this.router.navigate(['']);
        }
      }
    );
  }
  register() {
    this.router.navigate(['register']);
  }
  ngOnInit() {
  }

}
