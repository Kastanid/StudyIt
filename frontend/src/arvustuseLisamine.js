import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class arvustuseLisamine{
  router
	reviewData = {}
	reviewList = []
	hasUser = false;

  constructor(router){
    this.router = router;
  }

	activate() {
  var cookieList = document.cookie.split(";");
    for(var i = 0; i < cookieList.length; i++) {
      if(cookieList[i].includes("user")) {
        this.hasUser = true;
        if(cookieList[i].split("=")[1] == "") {
          this.router.navigate("login");
          alert("Arvustuse lisamiseks pead olema sisse logitud.");
        }
      }
    }
    if(!this.hasUser) {
      this.router.navigate("login");
      alert("Arvustuse lisamiseks pead olema sisse logitud.");
    }
		let client = new HttpClient();
		client.fetch('http://localhost:8080/reviews')
			.then(response => response.json())
			.then(reviews => this.reviewList = reviews);
			console.log("Get method ex.!")
	}

	addReview() {
	  if(this.reviewData.aineNimetus == "" || this.reviewData.aineKood == ""
	    || this.reviewData.aineArvustus=="" || this.reviewData.aineSoovitus==""){
	      alert("Kontrolli, et kõik väljad oleksid täidetud!");
	      return false;
	    }
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
        this.router.navigate("mainPage");
    });
	}
}

function trimAndToUpperCase(str) {
  str = $.trim(str)
  str = str.toUpperCase();
  return str;
}
