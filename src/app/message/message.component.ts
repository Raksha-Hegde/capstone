import { OnInit, Component, Input } from '@angular/core';
import { Message } from './message';
import { UserCircleService } from '../user-circle.service';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

    messages = [];
    userData: string;
    message: Message;
    msg: string;
    receiverId: string;
    circle: string;
    type: string;
    newUser: string;
    @Input() messageObj: object;

    constructor(private usrCirService: UserCircleService, private messageService: MessageService) { }
    ngOnChanges(value: any) {

        this.type = value.messageObj.currentValue.type;
        this.receiverId = value.messageObj.currentValue.value;

        if (this.type === 'user') {
            this.messageService.getMessagesFromUser(this.receiverId).subscribe(
                data => {
                    this.messages = data.json();
                });

        } else {
            this.messageService.getMessagesByCircle(this.receiverId).subscribe(
                data => {
                    this.messages = data.json();
                });
        }

    }

    onClick(message: any, type: any) {

        this.message = new Message();
        this.message.message = message;
        this.message.senderName = localStorage.getItem('username');
        console.log(this.message.senderName);
        if (type === 'user') {
            this.message.receiverId = this.receiverId;
            this.messageService.sendMessageToUser(this.message).subscribe(
                data => {
                    if (data.status === 200) {
                        const obj = {
                            'senderName': localStorage.getItem('username'),
                            'receiverId': this.receiverId,
                            'message': message
                        };
                        this.messages.push(obj);
                        this.msg = '';
                    }
                },
                // tslint:disable-next-line:no-shadowed-variable
                error => {
                    alert('Something went wrong, please try after sometime');
                });
        } else {
            this.message.circleName = this.receiverId;
            this.messageService.sendMessageToCircle(this.message).subscribe(
                data => {
                    if (data.status === 200) {
                        const obj = {
                            'senderName': localStorage.getItem('username'),
                            'circleName': this.receiverId,
                            'message': message
                        };
                        this.messages.push(obj);
                        this.msg = '';
                    }
                },
                // tslint:disable-next-line:no-shadowed-variable
                error => {
                    alert('Something went wrong, please try after sometime');
                });
        }
    }

    addUserToCircle(user: string) {
        this.usrCirService.addUserToCircle(user, this.receiverId).subscribe(
            data => {
                if (data.status === 200) {
                    alert('\"' + user + '\" user successfully added to ' + this.receiverId + ' cirlce');
                    this.newUser = '';
                } else {
                    alert('Something went wrong, Please try after sometime');
                }
            },
            // tslint:disable-next-line:no-shadowed-variable
            error => {
                alert('Something went wrong, please try after sometime');
            }
        );
    }
    ngOnInit() {

    }
}
