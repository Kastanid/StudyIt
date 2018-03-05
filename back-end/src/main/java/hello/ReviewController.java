package hello;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewController {

    private static final String template = "Hello, %s!";

    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping("/review")
    public Review review(@RequestParam(value="name", defaultValue="World") String name) {
        return new Review("Tarkvaratehnika", String.format(template, name));
    }
}