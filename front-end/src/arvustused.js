import {HttpClient, json} from 'aurelia-fetch-client';
import {Arvustus} from './arvustus';

export class arvustused {
  reviews = [];
  constructor(){

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
          var i = 0;
          console.log(data[x].length);
          while(i < data[x].length){
            var arrayItem = data[x][i];
            console.log(arrayItem);
            var arrayData = [];
            for(var y in arrayItem){
              arrayData.push(arrayItem[y]);
            }
            this.reviews.push(new Arvustus(arrayData[0], arrayData[1]));
            i++;
          }
        }
        console.log(this.reviews);
      });
    console.log("Toimis");
  }
}
