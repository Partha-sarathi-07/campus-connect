package com.campusconnect.controller;

import com.campusconnect.dto.request.PostRequestDTO;
import com.campusconnect.dto.response.PostResponseDTO;
import com.campusconnect.service.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

    @PostMapping
    public ResponseEntity<PostResponseDTO> addNewPost(@RequestParam("description") String description,
                                                      @RequestParam("image") MultipartFile imageFile) throws IOException {
        System.out.println("Hiii");
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(postService.addNewPost(description, imageFile));
    }
}
