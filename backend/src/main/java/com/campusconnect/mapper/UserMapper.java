package com.campusconnect.mapper;

import com.campusconnect.dto.request.RegisterUserRequestDTO;
import com.campusconnect.dto.request.UpdateUserRequestDTO;
import com.campusconnect.dto.response.UserResponseDTO;
import com.campusconnect.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public UserResponseDTO toDto(User user) {
        return UserResponseDTO.builder()
                .username(user.getUsername())
                .profilePicture(user.getProfilePhoto())
                .fullname(user.getFullname())
                .build();
    }

    public User toModel(UpdateUserRequestDTO user) {
        User userModel = new User();
        userModel.setFullname(user.getFullname());
        userModel.setProfilePhoto(user.getProfilePicture());
        return userModel;
    }

    public User toModel(RegisterUserRequestDTO user) {
        User userModel = new User();
        userModel.setUsername(user.getUsername());
        userModel.setFullname(user.getFullname());
        userModel.setPassword(user.getPassword());
        return userModel;

    }
}
