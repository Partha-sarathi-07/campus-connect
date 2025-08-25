package com.campusconnect.service;

import com.campusconnect.dto.request.PostRequestDTO;
import com.campusconnect.dto.response.PostResponseDTO;
import com.campusconnect.exception.customException.PostNotFoundException;
import com.campusconnect.mapper.PostMapper;
import com.campusconnect.model.Post;
import com.campusconnect.model.User;
import com.campusconnect.repository.PostRepository;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final PostMapper mapper;
    private final EntityManager entityManager;

    public PostService(PostRepository postRepository,
                       PostMapper mapper,
                       EntityManager entityManager) {
        this.postRepository = postRepository;
        this.mapper = mapper;
        this.entityManager = entityManager;
    }

    public List<PostResponseDTO> getAllPosts() {
        List<Post> allPosts = postRepository.findAll();
        return allPosts.stream()
                    .map(mapper::toDto)
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
