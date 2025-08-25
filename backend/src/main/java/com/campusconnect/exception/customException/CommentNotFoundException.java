package com.campusconnect.exception.customException;


import com.campusconnect.exception.base.NotFoundException;

public class CommentNotFoundException extends NotFoundException {
    public CommentNotFoundException(int commentId) {
        super("Comment with id " + commentId + " is not found");
    }
}
