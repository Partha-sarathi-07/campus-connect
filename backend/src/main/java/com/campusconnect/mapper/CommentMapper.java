package com.campusconnect.mapper;

import com.campusconnect.dto.response.CommentResponseDTO;
import com.campusconnect.model.Comment;
import org.springframework.stereotype.Component;

@Component
public class CommentMapper {
    public CommentResponseDTO toDto(Comment comment) {
        return CommentResponseDTO.builder()
                .profilePhoto(comment.getUser().getProfilePhoto())
                .username(comment.getUser().getUsername())
                .fullname(comment.getUser().getFullname())
                .comment(comment.getComment())
                .commentedTime(comment.getCreatedAt())
                .isRepliesAvailable(!comment.getReplies().isEmpty())
                .build();
    }
}
