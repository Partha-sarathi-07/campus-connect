package com.campusconnect.controller;

import com.campusconnect.dto.request.CommentRequestDTO;
import com.campusconnect.dto.response.CommentResponseDTO;
import com.campusconnect.dto.response.PageResponseDTO;
import com.campusconnect.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/posts/{postId}/comments")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }
    @GetMapping
    public ResponseEntity<PageResponseDTO<CommentResponseDTO>> getCommentsByPostId(@PathVariable int postId,
                                                                                   @RequestParam(defaultValue = "0") int page,
                                                                                   @RequestParam(defaultValue = "5") int size) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(commentService.getByPostId(postId, page, size));
    }

    @GetMapping("/{commentId}")
    public ResponseEntity<PageResponseDTO<CommentResponseDTO>> getRepliesByCommentId(@PathVariable int commentId,
                                                                                     @RequestParam(defaultValue = "0") int page,
                                                                                     @RequestParam(defaultValue = "5") int size) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(commentService.getRepliesByCommentId(commentId, page, size));
    }

    @PostMapping
    public ResponseEntity<?> addNewComment(@RequestBody CommentRequestDTO newComment) {
        commentService.addNewComment(newComment);
        return ResponseEntity.status(HttpStatus.OK).body("happy");
    }
}
