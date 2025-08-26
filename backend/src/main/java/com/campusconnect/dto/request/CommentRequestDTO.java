package com.campusconnect.dto.request;

import lombok.Data;

@Data
public class CommentRequestDTO {
    private String comment;
    private Integer postId;
    private Integer parentCommentId;
}
