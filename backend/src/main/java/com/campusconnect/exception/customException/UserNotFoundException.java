package com.campusconnect.exception.customException;

import com.campusconnect.exception.base.NotFoundException;

public class UserNotFoundException extends NotFoundException {
    public UserNotFoundException(String username) {
        super("User with username " + username + " is not found");
    }
}
