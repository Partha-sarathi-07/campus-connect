package com.campusconnect.dto.request;

import lombok.Data;

@Data
public class UserRequestDTO {
    private String fullname;
    private byte[] profilePicture;
}
