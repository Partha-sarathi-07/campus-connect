package com.campusconnect.dto.request;

import lombok.Data;

@Data
public class LoginUserRequestDTO {
    private String username;
    private String password;
}
