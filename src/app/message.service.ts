import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Message } from './message/message';

@Injectable()
export class MessageService {

  constructor(private http: Http) { }

  receiver: string;
  circle: string;

  private BASE_URL = 'http://localhost:8086/api/message/';
  private loginUser = localStorage.getItem('username');
  headerObj = new Headers(
    { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
  );

  getMessagesFromUser(Name: any) {
    this.receiver = Name;
    console.log('In receiver : ', this.receiver);
    console.log('Sender : ', this.loginUser);
    return this.http.get(this.BASE_URL + 'getMessagesByUser/' + this.loginUser + this.receiver + '/2', { headers: this.headerObj });
  }
  sendMessageToUser(message: any) {
    console.log('Message receiver : ', message.receiverId);
    return this.http.post(this.BASE_URL + 'sendMessageToUser/' + message.receiverId, message, { headers: this.headerObj });
  }


  getMessagesByCircle(circle) {
    this.circle = circle;
    return this.http.get(this.BASE_URL + 'getMessagesByCircle/' + circle + '/2', { headers: this.headerObj });
  }

  sendMessageToCircle(message: any) {
    return this.http.post(this.BASE_URL + 'sendMessageToCircle/' + message.circleName, message, { headers: this.headerObj });
  }


}
