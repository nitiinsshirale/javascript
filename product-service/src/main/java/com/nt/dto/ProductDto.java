package com.nt.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class ProductDto {
    private String id = UUID.randomUUID().toString();
    private String name;
    private double price;
}
