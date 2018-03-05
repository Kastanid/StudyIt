import {HttpClient, json} from 'aurelia-fetch-client';

export class arvustused {
  reviews = [];
  constructor(){

  }
  activate(){
    let client = new HttpClient();

    client.fetch("http://localhost:8080/review", {
      'method':'POST',
      'body': json(this.reviews)
    })
      .then(response => response.json())
      .then(data => {

        for(var x in data){
          this.reviews.push(data[x]);
        }
        console.log(this.reviews);
      });


    console.log("Toimis");
  }
}
