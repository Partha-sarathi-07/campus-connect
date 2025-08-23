package com.campusconnect.dto.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;


@Data
@Builder
public class PostResponseDTO {
    private byte[] profilePhoto;
    private String username;
    private String fullname;
    private String postDescription;
    private byte[] postImage;
    private int likeCount;
    private int commentCount;
    private int savedCount;
    private LocalDateTime postedTime;
}
