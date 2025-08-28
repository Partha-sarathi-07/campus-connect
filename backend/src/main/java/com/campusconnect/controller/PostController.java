package com.campusconnect.controller;

import com.campusconnect.dto.response.PageResponseDTO;
import com.campusconnect.dto.response.PostResponseDTO;
import com.campusconnect.service.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class PostController {
    private final PostService postService;
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/{username}")
    public ResponseEntity<List<PostResponseDTO>> getUserPosts(@PathVariable String username) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(postService.getUserPosts(username));
    }

    @GetMapping
    public ResponseEntity<PageResponseDTO<PostResponseDTO>> getPosts(@RequestParam(defaultValue = "0")int page,
                                                          @RequestParam(defaultValue = "5")int size) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(postService.getAllPosts(page, size));
    }

    @PostMapping
    public ResponseEntity<PostResponseDTO> addNewPost(@RequestParam("description") String description,
                                                      @RequestParam("image") MultipartFile imageFile){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(postService.addNewPost(description, imageFile));
    }

    @PostMapping("/{postId}/likes")
    public ResponseEntity<Void> addLike(@PathVariable int postId) {
        postService.addLike(postId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{postId}/likes")
    public ResponseEntity<Void> removeLike(@PathVariable int postId) {
        postService.removeLike(postId);
        return ResponseEntity.noContent().build();
    }


}
