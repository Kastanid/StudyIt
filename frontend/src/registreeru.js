import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework';
export class registreeru {

      users = {}
    	userData = {}
    	userList = []

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
               console.log(document.cookie);
                console.log("Tere");
                console.log(this.userData.username);
               }
             }
           });

  }
}
