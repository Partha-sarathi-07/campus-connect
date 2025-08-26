package com.campusconnect.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PostResponseDTO {
    private byte[] profilePhoto;
    private String username;
    private String fullname;
    private String postDescription;
    private byte[] postImage;
    private Integer likeCount;
    private Integer commentCount;
    private Integer savedCount;
    private LocalDateTime postedTime;
}
