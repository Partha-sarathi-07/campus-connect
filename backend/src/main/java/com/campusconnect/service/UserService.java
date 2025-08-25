package com.campusconnect.service;

import com.campusconnect.dto.response.UserResponseDTO;
import com.campusconnect.exception.customException.UserNotFoundException;
import com.campusconnect.model.User;
import com.campusconnect.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserResponseDTO getUser() {
        String username = "sarathi@gmail.com";
        User user = userRepository
                .findById(username)
                .orElseThrow(() -> new UserNotFoundException(username));
        
    }
}
