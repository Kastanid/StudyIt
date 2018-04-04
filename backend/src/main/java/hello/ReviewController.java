package hello;

import org.springframework.web.bind.annotation.*;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
public class ReviewController {

    private ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @CrossOrigin
    @RequestMapping(value="/reviews/add", method=RequestMethod.POST,
            consumes = "application/json")
    public Review addReview(@RequestBody Review review) {
        return reviewService.addReview(review);
    }

    @CrossOrigin
    @RequestMapping(value="/reviews")
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

}
