package com.campusconnect.service;

import com.campusconnect.exception.customException.UnauthorizedException;
import com.campusconnect.model.UserPrincipal;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class SecurityService {
    public UserPrincipal getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.getPrincipal() instanceof UserPrincipal)
            return (UserPrincipal) auth.getPrincipal();
        throw new UnauthorizedException();
    }
}
