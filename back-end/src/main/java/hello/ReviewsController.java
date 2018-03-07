package hello;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewsController {

    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping("/reviews")
    public Reviews reviews() {
        Reviews rev = new Reviews();
        rev.addReview(new Review("Tarkvaratehnika", "Jube Palju teha"));
        rev.addReview(new Review("Diskreetnematemaatika", "Mulle sobis"));
        rev.addReview(new Review("Süteemianalüüs", "Milleks?"));
        return rev;
    }
}