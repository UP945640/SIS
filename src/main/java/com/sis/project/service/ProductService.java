package com.sis.project.service;

import com.sis.project.model.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product createProduct(Product product);

    String deleteProduct(Long productId);

    Product updateProduct(Product product, Long productId);
}
