package hello;

import org.junit.After;
import org.junit.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.junit.runner.RunWith;
import org.junit.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;

import static org.hamcrest.Matchers.instanceOf;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE;


@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = NONE)
public class ReviewTest {
    private Review rev;
    private ArrayList<Review> reviewList;

    @Before
    public void setUp(){
        rev = new Review( "mata", "asd12", "OK", "ei soovita", 12);
        entityManager.merge(rev);
        entityManager.flush();
        reviewList = reviewRepository.findAll();
    }

    @After
    public void tearDown(){
        rev = null;
    }

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ReviewRepository reviewRepository;

    @Test
    public void nameTest(){
        int lenght = reviewList.size();
        String nimi = reviewList.get(lenght -1).aineNimetus;
        assertEquals(nimi, rev.aineNimetus);
    }

    @Test
    public void koodTest(){
        int lenght = reviewList.size();
        String kood = reviewList.get(lenght -1).aineKood;
        assertEquals(kood, rev.aineKood);
    }

    @Test
    public void arvustusTest(){
        int lenght = reviewList.size();
        String arvustus = reviewList.get(lenght -1).aineArvustus;
        assertEquals(arvustus, rev.aineArvustus);
    }

    @Test
    public void soovitusTest(){
        int lenght = reviewList.size();
        String soovitus = reviewList.get(lenght -1).aineSoovitus;
        assertEquals(soovitus, rev.aineSoovitus);
    }

    @Test
    public void scoreTest(){
        int lenght = reviewList.size();
        int score = reviewList.get(lenght -1).score;
        assertEquals(score, rev.score);
    }
}
