package com.campusconnect.exception.customException;


public class UnauthorizedException extends RuntimeException {
    public UnauthorizedException() {
        super("User is not authorized");
    }
}
