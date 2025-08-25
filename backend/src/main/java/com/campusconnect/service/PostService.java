package com.campusconnect.service;

import com.campusconnect.dto.request.PostRequestDTO;
import com.campusconnect.dto.response.PostResponseDTO;
import com.campusconnect.exception.customException.PostNotFoundException;
import com.campusconnect.mapper.PostMapper;
import com.campusconnect.model.Post;
import com.campusconnect.model.User;
import com.campusconnect.repository.PostRepository;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PostMapper mapper;

    @Autowired
    private EntityManager entityManager;

    public List<PostResponseDTO> getAllPosts() {
        List<Post> allPosts = postRepository.findAll();
        return allPosts.stream()
                    .map(post -> mapper.toDto(post))
                    .toList();
    }

    public PostResponseDTO addPost(PostRequestDTO newPost) {
        Post post = mapper.toModel(newPost);
        User userRef = entityManager.getReference(User.class, "sarathi@gmail.com");
        post.setUser(userRef);
        post = postRepository.save(post);
        return mapper.toDto(post);
    }

    public void likePost(int postId) {
        Post likedPost = postRepository
                .findById(postId)
                .orElseThrow(() -> new PostNotFoundException(postId));
        likedPost.setLikes(likedPost.getLikes() + 1);
        postRepository.save(likedPost);
    }

}
