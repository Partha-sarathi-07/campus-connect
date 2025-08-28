package com.campusconnect.service;

import com.campusconnect.dto.request.RegisterUserRequestDTO;
import com.campusconnect.dto.response.UserResponseDTO;
import com.campusconnect.exception.customException.ImageProcessingException;
import com.campusconnect.exception.customException.UserAlreadyExistException;
import com.campusconnect.exception.customException.UserNotFoundException;
import com.campusconnect.mapper.UserMapper;
import com.campusconnect.model.User;
import com.campusconnect.repository.UserRepository;
import jakarta.persistence.EntityManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Objects;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper mapper;
    private final PasswordEncoder encoder;
    private final EntityManager entityManager;
    private final SecurityService securityService;

    public UserService(UserRepository userRepository,
                       UserMapper mapper,
                       PasswordEncoder encoder,
                       EntityManager entityManager,
                       SecurityService securityService) {
        this.userRepository = userRepository;
        this.mapper = mapper;
        this.encoder = encoder;
        this.entityManager = entityManager;
        this.securityService = securityService;
    }


    public UserResponseDTO getUser(String username) {
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

    public UserResponseDTO updateUser(String fullname, MultipartFile profilePhoto) {
        try {
            User  user = new User(securityService.getCurrentUser().getUsername(), fullname, profilePhoto.getBytes());
            user = userRepository.save(user);
            return mapper.toDto(user);
        }
        catch (IOException ex) {
            throw new ImageProcessingException(ex.getMessage(), ex.getCause());
        }
    }

    public void deleteUser(String username) {
        try {
            userRepository.delete(entityManager.getReference(User.class, username));
        } catch (RuntimeException e) {
            throw new UserNotFoundException(username);
        }
    }
}
