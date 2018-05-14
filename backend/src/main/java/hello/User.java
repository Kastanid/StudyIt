package hello;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @Column(length =200, unique = true)
    @NotNull
    private String email;
    @NotNull
    @Column(length =50)
    private String username;
    @NotNull
    @Column(length =100)
    private String password;


    User(String email, String username, String password)
    {
        this.email = email;
        this.username = username;
        this.password = password;
    }
    User(){

    }
}
