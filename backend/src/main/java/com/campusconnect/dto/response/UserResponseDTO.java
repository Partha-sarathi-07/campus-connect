package com.campusconnect.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserResponseDTO {
    private String username;
    private String fullname;
    private byte[] profilePicture;
}
