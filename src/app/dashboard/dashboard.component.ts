import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private router: Router) { }
  currentSelected: object;

  onSelect(data) {
    console.log('Dashboard data-value: ', data.value);
    this.currentSelected = data;
    console.log('Selected user in dashboard: ' , this.currentSelected);

  }

  signout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.clear();
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

}
