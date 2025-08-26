package com.campusconnect.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "posts")
@Component
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer postId;

    @Lob
    private byte[] image;

    @Column(nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "username", nullable = false)
    private User user;

    @Column(nullable = false)
    private Integer likes = 0;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "post")
    private List<Comment> comments = new ArrayList<>();

    @ManyToMany(mappedBy = "savedPosts")
    private List<User> savedUsers = new ArrayList<>();

    public Post(String description, byte[] image) {
        this.description = description;
        this.image = image;
    }
}
