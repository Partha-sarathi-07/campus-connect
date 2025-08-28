package com.campusconnect.service;

import com.campusconnect.dto.request.PostRequestDTO;
import com.campusconnect.dto.response.PageResponseDTO;
import com.campusconnect.dto.response.PostResponseDTO;
import com.campusconnect.exception.customException.ImageProcessingException;
import com.campusconnect.exception.customException.PostNotFoundException;
import com.campusconnect.mapper.PageMapper;
import com.campusconnect.mapper.PostMapper;
import com.campusconnect.model.Post;
import com.campusconnect.model.User;
import com.campusconnect.repository.PostRepository;
import jakarta.persistence.EntityManager;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final PostMapper postMapper;
    private final EntityManager entityManager;
    private final SecurityService securityService;
    private final PageMapper pageMapper;

    public PostService(PostRepository postRepository,
                       PostMapper postMapper,
                       EntityManager entityManager,
                       SecurityService securityService,
                       PageMapper pageMapper) {
        this.postRepository = postRepository;
        this.postMapper = postMapper;
        this.entityManager = entityManager;
        this.securityService = securityService;
        this.pageMapper = pageMapper;
    }

    public PageResponseDTO<PostResponseDTO> getAllPosts(int page, int size) {
        Pageable pageable = PageRequest.of(page, page, Sort.by("createdAt").descending());
        Page<PostResponseDTO> allPosts = postRepository
                .findAll(pageable)
                .map(postMapper::toDto);
        return pageMapper.toDto(allPosts);


    }


    public void likePost(int postId) {
        Post likedPost = postRepository
                .findById(postId)
                .orElseThrow(() -> new PostNotFoundException(postId));
        likedPost.setLikes(likedPost.getLikes() + 1);
        postRepository.save(likedPost);
    }

    public List<PostResponseDTO> getUserPosts(String username) {
        User userRef = entityManager.getReference(User.class, username);
        List<Post> posts = postRepository.findByUser(userRef);
        return posts.stream()
                .map(postMapper::toDto)
                .toList();

    }

    public PostResponseDTO addNewPost(String description, MultipartFile imageFileData) {
        User user = entityManager.getReference(User.class, Objects.requireNonNull(securityService.getCurrentUser()).getUsername());
        try {
            Post newPost = new Post(description, imageFileData.getBytes(), user);
            return postMapper.toDto(postRepository.save(newPost));
        } catch (IOException e) {
            throw new ImageProcessingException(e.getMessage(), e.getCause());
        }
    }


    public void addLike(int postId) {
        Post post = postRepository.findById(postId).orElseThrow(() -> new PostNotFoundException(postId));
        post.setLikes(post.getLikes() + 1);
        postRepository.save(post);
    }

    public void removeLike(int postId) {
        Post post = postRepository.findById(postId).orElseThrow(() -> new PostNotFoundException(postId));
        post.setLikes(post.getLikes() - 1);
        postRepository.save(post);
    }
}
