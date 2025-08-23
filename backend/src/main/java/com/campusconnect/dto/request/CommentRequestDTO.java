package com.campusconnect.dto.request;

import lombok.Data;

@Data
public class CommentRequestDTO {
    private String comment;
    private int postId;
    private int parentCommentId;
}
