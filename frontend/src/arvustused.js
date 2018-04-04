import {HttpClient, json} from 'aurelia-fetch-client';
import {Arvustus} from './arvustus';
import {inject} from 'aurelia-framework';

export class arvustused {
  reviews = [];
  valitudAine = "";

  activate(){
    if(document.getElementById("valitudAine")!= null) this.valitudAine = document.getElementById("valitudAine").value;
    console.log(this.valitudAine);
    let client = new HttpClient();
    client.fetch("http://localhost:8080/reviews", {
      'method':'POST',
      'body': json(this.reviews)
    })
      .then(response => response.json())
      .then(data => {
      console.log(data);
        for(var x in data){
          console.log(this.valitudAine);
          if(data[x].aineNimetus.includes(this.valitudAine)){
            this.reviews.push(new Arvustus(data[x].aineNimetus, data[x].aineKood, data[x].aineArvustus, data[x].aineSoovitus));
            console.log(this.reviews);
          }
        }
      });
      console.log(this.reviews);
  }
}
