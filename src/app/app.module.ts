import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CircleComponent } from './circle/circle.component';
import { MessageComponent } from './message/message.component';
import { UserService } from './user.service';
import { CircleService } from './circle.service';
import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserCircleService } from './user-circle.service';
import { FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CircleComponent,
    MessageComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule,
    RouterModule.forRoot([
          {
           path : 'register',
           component : RegisterComponent
         },
            {
           path : '',
           component : LoginComponent
         },
            {
           path : 'dashboard',
           component : (localStorage.getItem('token') ==null)? LoginComponent : DashboardComponent
         },
         {
           path : 'login',
           component : LoginComponent
         }
          ])
  ],
  providers: [UserService, CircleService, MessageService, UserCircleService],
  bootstrap: [AppComponent]
})
export class AppModule { }