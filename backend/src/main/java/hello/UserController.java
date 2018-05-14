package hello;

import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.awt.PageAttributes.MediaType;
import java.nio.charset.Charset;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin
    @RequestMapping(value="/users/add", method=RequestMethod.POST,
            consumes = "application/json")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @CrossOrigin
    @RequestMapping(value="/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

}
