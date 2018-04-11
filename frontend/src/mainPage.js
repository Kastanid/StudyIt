import {HttpClient, json} from 'aurelia-fetch-client';
import {Arvustus} from './arvustus';
import {inject} from 'aurelia-framework';


export class mainPage {
  reviews = [];

  clearSearch(){
      document.getElementById("searching").value = ""
  }

  setValitudAine(){
    document.cookie = "valitudAine=" + document.getElementById("searching").value;
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
