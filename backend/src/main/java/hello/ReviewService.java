package hello;

import java.util.List;


import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    private ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    Review addReview(Review review) {
        return reviewRepository.save(review);
    }

    List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }
}
