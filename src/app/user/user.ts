export class User{
    username : string;
    name : string;
    password : string;

    users : object[];

    constructor()
    {
        this.users = [
    {username: 'tom', name: 'TOM', password: 'tom123'},
    {username: 'jerry', name: 'Jerry', password: 'jerry123'}
];
        }
    getUser(){
        return this.users;
        }
    }


// export class User {
//   username: string;
//   name: string;
//   users: Object[];
//   constructor() {
//     this.users = [
//       {
//         username: 'Bhola',
//         name: 'Bhola'
//       },
//       {
//         username: 'Bikar',
//         name: 'Bikar Dass'
//       },
//       {
//         username: 'Labba',
//         name: 'Lab Dass'
//       },
//       {
//         username: 'Mithu',
//         name: 'Mithu Singh'
//       }
//     ];
//   }
//
//   getUser() {
//     return this.users;
//   }
// }
