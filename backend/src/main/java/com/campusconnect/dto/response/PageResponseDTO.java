package com.campusconnect.dto.response;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class PageResponseDTO<T> {
    private List<T> content;
    private int pageNumber;
    private int pageSize;
    private int totalElements;
    private int totalPages;
    private boolean isLast;
}
