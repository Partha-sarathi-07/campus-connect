package com.campusconnect.mapper;

import com.campusconnect.dto.response.CommentResponseDTO;
import com.campusconnect.dto.response.PageResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

@Component
public class PageMapper {

    public PageResponseDTO<CommentResponseDTO> toDto(Page<CommentResponseDTO> map) {
        return PageResponseDTO.<CommentResponseDTO>builder()
                .content(map.getContent())
                .pageNumber(map.getNumber())
                .pageSize(map.getSize())
                .totalElements(map.getNumberOfElements())
                .totalPages(map.getTotalPages())
                .isLast(map.isLast())
                .build();
    }
}
