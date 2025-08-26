package com.campusconnect.service;

import com.campusconnect.dto.request.CommentRequestDTO;
import com.campusconnect.dto.response.CommentResponseDTO;
import com.campusconnect.dto.response.PageResponseDTO;
import com.campusconnect.mapper.CommentMapper;
import com.campusconnect.mapper.PageMapper;
import com.campusconnect.model.Comment;
import com.campusconnect.model.Post;
import com.campusconnect.model.User;
import com.campusconnect.repository.CommentRepository;
import com.campusconnect.utils.SecurityUtil;
import jakarta.persistence.EntityManager;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final EntityManager entityManager;
    private final CommentMapper commentMapper;
    private final PageMapper pageMapper;

    public CommentService(CommentRepository commentRepository,
                          EntityManager entityManager,
                          CommentMapper commentMapper,
                          PageMapper pageMapper) {
        this.commentRepository = commentRepository;
        this.entityManager = entityManager;
        this.commentMapper = commentMapper;
        this.pageMapper = pageMapper;
    }

    public PageResponseDTO<CommentResponseDTO> getByPostId(int postId, int page, int size) {
        Post post = entityManager.getReference(Post.class, postId);
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        Page<CommentResponseDTO> pageResponseDTOS = commentRepository
                .findByPostAndParentIsNull(post, pageable)
                .map(commentMapper::toDto);
        return pageMapper.toDto(pageResponseDTOS);
    }

    public PageResponseDTO<CommentResponseDTO> getRepliesByCommentId(int commentId, int page, int size) {
        Comment parentComment = entityManager.getReference(Comment.class, commentId);
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        Page<CommentResponseDTO> pageResponseDTOS = commentRepository
                .findByParent(parentComment, pageable)
                .map(commentMapper::toDto);
        return pageMapper.toDto(pageResponseDTOS);
    }

    public void addNewComment(CommentRequestDTO commentRequestDTO) {
        Post post = commentRequestDTO.getPostId() != null ?
                entityManager.getReference(Post.class, commentRequestDTO.getPostId()) :
                null;
        Comment parentComment = commentRequestDTO.getParentCommentId() != null ?
                entityManager.getReference(Comment.class, commentRequestDTO.getParentCommentId()):
                null;
        User user = entityManager.getReference(User.class, SecurityUtil.getCurrentUser().getUsername());
        Comment comment = new Comment(commentRequestDTO.getComment(), post, parentComment, user);
        commentRepository.save(comment);

    }
}
