package com.stackroute.userservice.service;

import com.stackroute.userservice.exception.IncorrectPasswordException;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {


    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User registerUser(User user) throws UserAlreadyExistsException {
        final boolean existsById = this.userRepository.existsById(user.getEmail());
        if (existsById) {
            throw new UserAlreadyExistsException("User already exists");
        }
        return this.userRepository.save(user);
    }

    @Override
    public User authenticateUser(String email, String password) throws UserNotFoundException, IncorrectPasswordException {
        final boolean exists = this.userRepository.existsById(email);
        if (!exists) {
            throw new UserNotFoundException("User Not exists with given email");
        }
        final Optional<User> optionalUser = this.userRepository.findByEmailAndPassword(email, password);
        if (optionalUser.isEmpty()) {
            throw new IncorrectPasswordException("Password mismatch");
        }
        return optionalUser.get();
    }

    @Override
    public User getUserCredentials(String email) throws UserNotFoundException {
        Optional<User> getRegisteredUser = userRepository.findById(email);
        if (getRegisteredUser.isPresent()) {
            return getRegisteredUser.get();
        } else {
            return null;
        }
    }

    @Override
    public User editUserProfile(User user) {
        User existsById = this.userRepository.save(user);
        if(existsById!=null){
            return userRepository.save(user);
        }
        return null;
    }

}
