package com.campusconnect.exception.customException;

public class UserAlreadyExistException extends RuntimeException{

    public UserAlreadyExistException(String username) {
        super("User with username " + username + " already exists");
    }

}
