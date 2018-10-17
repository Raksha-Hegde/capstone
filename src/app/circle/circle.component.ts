import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Circle } from './circle';
import { CircleService } from '../circle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  circles= [];
  circle: Circle;
  Crcle: string;
  @Output() selectedCircle = new EventEmitter<any>();
  constructor(private circleService: CircleService,private router: Router) { }
  
  selectCircle(circledata: string) {
      const currentCircle = {
          type : 'circle',
          value: circledata
      };
      this.selectedCircle.emit(currentCircle);
  }

  getCircles() {
      this.circleService.getCircles().subscribe(data => {
          this.circles = data.json();
      });
  }
  
  createCircle(circle: any){
    this.circle = new Circle();
    this.circle.circleName = circle;
    this.circle.creatorId = localStorage.getItem('username');
    this.circleService.createCircle(this.circle).subscribe(
        data => {
            if (data.status === 200) {
              let obj = {
                'circleName': circle,
                'creatorId': localStorage.getItem('username')
              }
              this.circles.push(obj);
              this.Crcle = '';
              this.router.navigate(['dashboard']);
              location.reload();
            }
            location.reload();
          },
        error => {
          alert('Something went wrong, please try after sometime');
        }
    )
  }
  ngOnInit() {
    this.getCircles();
  }

}
