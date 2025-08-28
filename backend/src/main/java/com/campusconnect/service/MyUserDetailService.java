package com.campusconnect.service;

import com.campusconnect.exception.customException.UserNotFoundException;
import com.campusconnect.model.User;
import com.campusconnect.model.UserPrincipal;
import com.campusconnect.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    public MyUserDetailService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) {
        User user = userRepository
                .findById(username)
                .orElseThrow(() -> new UserNotFoundException(username));
        return new UserPrincipal(user);
    }
}
