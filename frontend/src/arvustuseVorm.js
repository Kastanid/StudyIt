import {HttpClient, json} from 'aurelia-fetch-client'

export class arvutuseVorm{

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
	  this.activate();
		let client = new HttpClient();

		client.fetch('http://localhost:8080/reviews/add', {
			'method': "POST",
			'body': json(this.reviewData)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Server saatis " + data.box);
		});

		console.log("Method executed!")
	}
}
