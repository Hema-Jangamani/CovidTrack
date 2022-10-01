package com.stackroute.userservice.service;

import com.stackroute.userservice.exception.IncorrectPasswordException;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.model.User;

public interface UserService {

    User registerUser(User user) throws UserAlreadyExistsException;

    User authenticateUser(String email, String password) throws UserNotFoundException, IncorrectPasswordException;

    User editUserProfile(User user);

    User getUserCredentials(String email);
}
