package hello;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Table;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
}