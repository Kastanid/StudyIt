import {HttpClient, json} from 'aurelia-fetch-client';

export class mainPage {
  subjectData = {}

  constrictor(){
  }

  searchSubject(){
    let client = new HttpClient();

    client.fetch("http://localhost:8080/greeting", {
      'method':'POST',
      'body': json(this.subjectData)
    })
      .then(response => response.json())
      .then(data => {
        console.log("SErver saati" + data.content);
      });


    console.log("Toimis");
  }
}
