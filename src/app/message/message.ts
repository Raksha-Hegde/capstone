export class Message {
    messageId: number;
    senderName: string;
    receiverId: string;
    circleName: string;
    postedDate: string;
    message: string;
    messages: object[];


    constructor() {
        this.messages = [];
    }

    getMessageArray() {
        return this.messages;
    }
}
