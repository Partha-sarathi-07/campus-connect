package com.campusconnect.service;

import com.campusconnect.dto.request.RegisterUserRequestDTO;
import com.campusconnect.dto.request.UpdateUserRequestDTO;
import com.campusconnect.dto.response.UserResponseDTO;
import com.campusconnect.exception.customException.UserAlreadyExistException;
import com.campusconnect.exception.customException.UserNotFoundException;
import com.campusconnect.mapper.UserMapper;
import com.campusconnect.model.User;
import com.campusconnect.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper mapper;
    private final PasswordEncoder encoder;

    public UserService(UserRepository userRepository,
                       UserMapper mapper,
                       PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.mapper = mapper;
        this.encoder = encoder;
    }


    public UserResponseDTO getUser() {
        String username = "sarathi@gmail.com";
        User user = userRepository
                .findById(username)
                .orElseThrow(() -> new UserNotFoundException(username));
        return mapper.toDto(user);
    }

    public UserResponseDTO saveUser(RegisterUserRequestDTO user) {
        if (userRepository.findById(user.getUsername()).isPresent())
            throw new UserAlreadyExistException(user.getUsername());
        user.setPassword(encoder.encode(user.getPassword()));
        return mapper.toDto(userRepository.save(mapper.toModel(user)));
    }
}
