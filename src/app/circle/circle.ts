export class Circle {
  circleName: string;
  creatorId: string;
  createdDate: string;

  circles : object[];
  constructor()
  {
  this.circles = [ ]
  }

  getCircle()
  {
    return this.circles;
  }
}
