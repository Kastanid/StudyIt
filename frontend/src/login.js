import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {App} from './app';

@inject(App, Router)
export class login {
  currentPage = "mainPage"
  users = {}
  userData = {}
  userList = []
  router

  constructor(app, router){
    this.router = router;
    this.currentPage = app.currentPage;
  }
  getUser() {
    let client = new HttpClient();
    client.fetch("http://localhost:8080/users", {
      'method':'POST',
      'body': json(this.users)
    })
    .then(response => response.json())
    .then(data => {
      for(var x in data){
        console.log(data);
        if(data[x].username == (this.userData.username)
        && data[x].password == (this.userData.password)
        && this.userData.username != "" && this.userData.password != "")
        {
          document.cookie = "user=" + document.getElementById("username").value;
          document.getElementById("logOutButton").style.display = "inline-block";
          document.getElementById("registerButton").style.display = "none";
          document.getElementById("loginButton").style.display = "none";
          this.router.navigate(this.currentPage);
        }
        else alert("Kasutajanimi või parool on vale.");
      }
    });
  }
}
