package com.campusconnect.mapper;

import com.campusconnect.dto.response.PageResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

@Component
public class PageMapper {

    public <T> PageResponseDTO<T> toDto(Page<T> map) {
        return PageResponseDTO.<T>builder()
                .content(map.getContent())
                .pageNumber(map.getNumber())
                .pageSize(map.getSize())
                .totalElements(map.getNumberOfElements())
                .totalPages(map.getTotalPages())
                .isLast(map.isLast())
                .build();
    }
}
