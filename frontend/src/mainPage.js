import {HttpClient, json} from 'aurelia-fetch-client';
import {Arvustus} from './arvustus';
import {User} from './user';
import {inject} from 'aurelia-framework';


export class mainPage {
  reviews = [];

  clearSearch(){
      document.getElementById("searching").value = ""
  }

  setValitudAine(){
    var value = document.getElementById("searching").value;
    if(value == ""){
      alert("Palun sisesta otsitav õppeaine.");
      return false;
    }
    else if(!this.reviews.includes(value.toUpperCase())) {
      alert("Sellist ainet pole olemas");
      return false;
    }
    else {
      document.cookie = "valitudAine=" + value.toUpperCase();
      return true;
    };
  }

  activate(){
    let client = new HttpClient();

    client.fetch("http://localhost:8080/reviews", {
      'method':'POST',
      'body': json(this.reviews)
    })
      .then(response => response.json())
      .then(data => {
      console.log(data);
        for(var x in data){
          if($.inArray(data[x].aineNimetus, this.reviews) == -1) {
            this.reviews.push(data[x].aineNimetus);
          }
        }
        console.log(this.reviews);
      });
 }
}
