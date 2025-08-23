package com.campusconnect.dto.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class CommentResponseDTO {
    private byte[] profilePhoto;
    private String username;
    private String fullname;
    private String comment;
    private LocalDateTime commentedTime;
    private boolean isRepliesAvailable;
}
