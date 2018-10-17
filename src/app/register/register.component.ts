import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { error } from 'util';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }

  registersUser(form:NgForm){
    this.userService.registerUser(form).subscribe(
      data=>{
        if(data.status === 201){
          alert(form.value.username+' created successfully');
          this.login();
        } else  {
          alert('Something went wrong, Please try after sometime');
          this.login();
        }
      },
      error => {
        if(error.status==409){
          alert(form.value.username+' already exists, Please try different usename');
          this.router.navigate(['register']);
          location.reload();
        }else{
          alert('Something went wrong, please try after sometime'); 
          this.login();
        }
      }
    )
  }

  login(){
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

}
