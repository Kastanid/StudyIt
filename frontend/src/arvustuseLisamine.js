import {HttpClient, json} from 'aurelia-fetch-client'

export class arvustuseLisamine{

	reviewData = {}
	reviewList = []

	activate() {
		let client = new HttpClient();
		client.fetch('http://localhost:8080/reviews')
			.then(response => response.json())
			.then(reviews => this.reviewList = reviews);
			console.log("Get method ex.!")
	}

	addReview() {
	  var cookieList = document.cookie.split(";");
    for(var i = 0; i < cookieList.length; i++) {
      if(cookieList[i].includes("user")) {
        if(cookieList[i].split("=")[1] != "") {
          this.reviewData.aineNimetus = trimAndToUpperCase(this.reviewData.aineNimetus);
          this.reviewData.aineKood = this.reviewData.aineKood.replace(/\s/g, '');
          this.reviewData.aineArvustus = this.reviewData.aineArvustus.trim();
          this.reviewData.aineSoovitus = this.reviewData.aineSoovitus.trim();

          this.activate();
          let client = new HttpClient();
          client.fetch('http://localhost:8080/reviews/add', {
            'method': "POST",
            'body': json(this.reviewData)
          })
            .then(response => response.json())
            .then(data => {
              alert("Edukalt lisatud!");
          });
        }
        else alert("Arvustuse Lisamiseks logi palun sisse!");
      }
    }


	}
}

function trimAndToUpperCase(str) {
  str = $.trim(str)
  str = str.toUpperCase();
  return str;
}
