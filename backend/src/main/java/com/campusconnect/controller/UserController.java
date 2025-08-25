package com.campusconnect.controller;

import com.campusconnect.dto.request.LoginUserRequestDTO;
import com.campusconnect.dto.request.RegisterUserRequestDTO;
import com.campusconnect.dto.response.LoginResponseDTO;
import com.campusconnect.dto.response.UserResponseDTO;
import com.campusconnect.service.JwtService;
import com.campusconnect.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api/auth")
public class UserController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public UserController(UserService userService,
                          AuthenticationManager authenticationManager,
                          JwtService jwtService) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    @PostMapping("register")
    public ResponseEntity<?> register(@RequestBody RegisterUserRequestDTO user) {
        UserResponseDTO savedUser = userService.saveUser(user);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedUser);
    }

    @PostMapping("login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginUserRequestDTO user) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

        if (authentication.isAuthenticated())
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(new LoginResponseDTO(jwtService.generateToken(user.getUsername()), "Login successfull"));
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(new LoginResponseDTO(null, "Invalid username or password"));
    }

}
