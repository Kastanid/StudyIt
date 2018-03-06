import {HttpClient, json} from 'aurelia-fetch-client';
import {Arvustus} from './arvustus';

export class mainPage {
  constrictor(){

  }
  searchbox(){
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
            this.reviews.push(arrayData[0]);
            i++;
          }


        }
        console.log(this.reviews);
      });

  /*function searchInput() {
      var input, filter, ul, li, arvustus, i;
      input = document.getElementById('searching');
      filter = input.value.toUpperCase();
      ul = document.getElementById("list");
      li = ul.getElementsByTagName('li');

      for (i = 0; i < li.length; i++) {
          arvustus = li[i].getElementByClassName("arvustus")[0];
          if (arvustus.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }*/
 }
}
