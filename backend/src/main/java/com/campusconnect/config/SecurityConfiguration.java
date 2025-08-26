package com.campusconnect.config;

import com.campusconnect.service.JwtService;
import com.campusconnect.service.MyUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    private final MyUserDetailService userDetailService;
    private final JwtFilter jwtFilter;

    public SecurityConfiguration(MyUserDetailService userDetailService, JwtFilter jwtFilter) {
        this.userDetailService = userDetailService;
        this.jwtFilter = jwtFilter;
    }

    @Bean
    public AuthenticationProvider authProvider() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider(userDetailService);
        authenticationProvider.setPasswordEncoder(new BCryptPasswordEncoder(12));
        return authenticationProvider;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(customizer -> customizer.disable())
                .authorizeHttpRequests(request ->
                        request
                                .requestMatchers("/api/auth/login",
                                        "/api/auth/register"
//                                        "/api/*",
//                                        "/api/posts/*",
//                                        "/api/comments/post/*",
//                                        "/api/comments/comment/*",
//                                        "/api/posts"
                                )
                                .permitAll()
                                .anyRequest()
                                .authenticated()
                )
                .sessionManagement(session ->
                        session
                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder(12);
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }
}
