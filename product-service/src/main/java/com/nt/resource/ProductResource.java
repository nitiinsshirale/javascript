package com.nt.resource;

import com.nt.dto.ProductDto;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RequestMapping("/products")
@RestController
public class ProductResource {

    private List<ProductDto> productDtos = new ArrayList<>();

    @GetMapping
    public List<ProductDto> findAll(){
        return productDtos;
    }

    @PostMapping
    public ProductDto createProduct(@RequestBody ProductDto productDto){
        productDtos.add(productDto);
        return productDto;
    }
}
