import {HttpClient, json} from 'aurelia-fetch-client';
import {User} from './user';
import {inject} from 'aurelia-framework';

export class users {
  users = [];

   activate() {
   		let client = new HttpClient();
   		 client.fetch("http://localhost:8080/users", {
            'method':'POST',
            'body': json(this.users)
          })
   			.then(response => response.json())
   			.then(users => this.userList = users);
   			console.log("Get method executed22!")
    };
 }
