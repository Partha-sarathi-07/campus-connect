package com.campusconnect.service;

import com.campusconnect.dto.request.PostRequestDTO;
import com.campusconnect.dto.response.PostResponseDTO;
import com.campusconnect.exception.customException.PostNotFoundException;
import com.campusconnect.mapper.PostMapper;
import com.campusconnect.model.Post;
import com.campusconnect.model.User;
import com.campusconnect.repository.PostRepository;
import com.campusconnect.utils.SecurityUtil;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

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

    public List<PostResponseDTO> getUserPosts(String username) {
        User userRef = entityManager.getReference(User.class, SecurityUtil.getCurrentUser().getUsername());
        List<Post> posts = postRepository.findByUser(userRef);
        return posts.stream()
                .map(mapper::toDto)
                .toList();
    }

    public PostResponseDTO addNewPost(String description, MultipartFile imageFileData) throws IOException {
        Post newPost = new Post(description, imageFileData.getBytes());
        System.out.println(1);
        User user = entityManager.getReference(User.class, Objects.requireNonNull(SecurityUtil.getCurrentUser()).getUsername());
        System.out.println(2);
        newPost.setUser(user);
        return mapper.toDto(postRepository.save(newPost));
    }

}
