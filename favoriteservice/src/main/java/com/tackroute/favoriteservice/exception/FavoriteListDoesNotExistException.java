package com.tackroute.favoriteservice.exception;

public class FavoriteListDoesNotExistException extends Exception{

    public FavoriteListDoesNotExistException() {
    }
    public FavoriteListDoesNotExistException(String message) {
        super(message);
    }

}
