package com.campusconnect.dto.request;

import lombok.Data;

@Data
public class RegisterUserRequestDTO {
    private String username;
    private String fullname;
    private String password;
}
