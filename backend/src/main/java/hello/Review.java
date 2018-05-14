package hello;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
public class Review {
    @Id
    @GeneratedValue
    int id;
    @NotNull
    String aineNimetus;
    @NotNull
    String aineKood;
    @NotNull
    String aineArvustus;
    @NotNull
    String aineSoovitus;
    @NotNull
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