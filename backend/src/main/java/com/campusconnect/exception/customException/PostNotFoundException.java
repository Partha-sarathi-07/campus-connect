package com.campusconnect.exception.customException;

import com.campusconnect.exception.base.NotFoundException;

public class PostNotFoundException extends NotFoundException {
    public PostNotFoundException(int postId) {
        super("Post with id " + postId + " is not found");
    }
}
