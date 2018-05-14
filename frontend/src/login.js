import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework';
export class login{

  users = [{"username":"da",
           "email":"dasdasd",
           "password":"asd"}]
	userData = {}
	userList = []

	activate() {
		let client = new HttpClient();
		client.fetch('http://localhost:8080/users')
			.then(response => response.json())
			.then(users => this.userList = users);
			console.log("Get method executed11!")
	}

	addUser() {
	  this.activate();
		let client = new HttpClient();

		client.fetch('http://localhost:8080/users/add', {
			'method': "POST",
			'body': json(this.userData)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Server saatis midagi2");
		});

		console.log("Method executed123!")
	}
}
