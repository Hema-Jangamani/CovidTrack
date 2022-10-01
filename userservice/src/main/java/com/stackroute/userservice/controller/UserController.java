package com.stackroute.userservice.controller;

import com.stackroute.userservice.config.JwtTokenGenerator;
import com.stackroute.userservice.exception.IncorrectPasswordException;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.model.UserDto;
import com.stackroute.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class UserController {

    private UserService userService;
    private JwtTokenGenerator jwtTokenGenerator;

    @Autowired
    public UserController(UserService userService, JwtTokenGenerator jwtTokenGenerator) {
        this.userService = userService;
        this.jwtTokenGenerator=jwtTokenGenerator;
    }

     @PostMapping("register")
    public User registerUser(@RequestBody User user) throws UserAlreadyExistsException {

        return this.userService.registerUser(user);
    }

   @GetMapping("findUser/{email}")
    public Object getUserByEmail(@PathVariable("email") String email) throws UserNotFoundException {
        User userEmail= userService.getUserCredentials(email);
        if(userEmail!=null){
            return userEmail;
        }
        return "No User Register Found";
   }

    @PutMapping("{email}")
    public Object editUserProfile(@RequestBody User user,@PathVariable("email") String email){
        User editUser= this.userService.editUserProfile(user);
        if(user.getEmail().equals(email)){
            return user;
        }else{
            return "No user Found";
        }
    }

    @PostMapping("login")
    public Map<String,String> authenticateUser(@RequestBody UserDto userDto) throws UserNotFoundException, IncorrectPasswordException {
        final User userr = this.userService.authenticateUser(userDto.getEmail(), userDto.getPassword());
        return this.jwtTokenGenerator.generateToken(userr);
    }

}
