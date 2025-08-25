package com.campusconnect.mapper;

import com.campusconnect.dto.request.PostRequestDTO;
import com.campusconnect.dto.response.PostResponseDTO;
import com.campusconnect.model.Post;
import org.springframework.stereotype.Component;

@Component
public class PostMapper {

    public PostResponseDTO toDto(Post post) {
        return PostResponseDTO.builder()
                .profilePhoto(post.getUser().getProfilePhoto())
                .username(post.getUser().getUsername())
                .fullname(post.getUser().getFullname())
                .postDescription(post.getDescription())
                .postImage(post.getImage())
                .likeCount(post.getLikes())
                .commentCount(post.getComments().size())
                .savedCount(post.getSavedUsers().size())
                .build();
    }

    public Post toModel(PostRequestDTO postRequestDTO) {
        return new Post(postRequestDTO.getDescription(), postRequestDTO.getImage());
    }
}
