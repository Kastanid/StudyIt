package hello;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Review {
    @Id
    @GeneratedValue
    int id;
    String aineNimetus;
    String aineKood;
    String aineArvustus;
    String aineSoovitus;
    int score;

    Review( String aineNimetus, String aineKood, String aineArvustus, String aineSoovitus, int score){
        this.aineNimetus = aineNimetus;
        this.aineKood = aineKood;
        this.aineArvustus = aineArvustus;
        this.aineSoovitus = aineSoovitus;
        this.score = score;
    }

    Review(){

    }
}