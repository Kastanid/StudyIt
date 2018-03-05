package hello;
import java.util.List;
import java.util.ArrayList;

public class Reviews {

    private final List<Review> reviews;

    public Reviews() {
        reviews = new ArrayList<Review>();
    }

    public void addReview(Review review) {
        this.reviews.add(review);
    }

    public List<Review> getReviews() {
        return reviews;
    }
}