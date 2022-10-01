package com.stackroute.userservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@ControllerAdvice
public class UserExceptionHandler {
    /*handling UserNotFoundException*/
    @ExceptionHandler
    public ResponseEntity<?> handleUserNotFoundException(UserNotFoundException exception, WebRequest webrequest) {
        ErrorDetails errorDetails = new ErrorDetails(new Date(), exception.getMessage(), webrequest.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
    }

    /*handling UserExistsException*/
    @ExceptionHandler
    public ResponseEntity<?> handleUserExistsException(UserAlreadyExistsException exception, WebRequest webrequest) {
        ErrorDetails errorDetails = new ErrorDetails(new Date(), exception.getMessage(), webrequest.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.ALREADY_REPORTED);
    }

    /*handling Global Exception*/
    @ExceptionHandler
    public ResponseEntity<?> handleException(Exception exception, WebRequest webrequest) {
        ErrorDetails errorDetails = new ErrorDetails(new Date(), exception.getMessage(), webrequest.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*handling IncorrectPasswordException*/
    @ExceptionHandler
    public ResponseEntity<?> handleIncorrectPasswordException(IncorrectPasswordException exception, WebRequest webrequest) {
        ErrorDetails errorDetails = new ErrorDetails(new Date(), exception.getMessage(), webrequest.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
    }
}