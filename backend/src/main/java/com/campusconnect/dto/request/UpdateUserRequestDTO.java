package com.campusconnect.dto.request;

import lombok.Data;

@Data
public class UpdateUserRequestDTO {
    private String fullname;
    private byte[] profilePicture;
}
