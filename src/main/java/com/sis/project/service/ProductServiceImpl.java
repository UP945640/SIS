package com.sis.project.service;

import com.sis.project.model.Product;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private Long nextId =1L;
    private List<Product> productList = new ArrayList<Product>();

    @Override
    public List<Product> getAllProducts() {
        return productList;
    }

    @Override
    public Product createProduct(Product product) {
        product.setProductId(nextId++);
        productList.add(product);
        return product;
    }

    @Override
    public String deleteProduct(Long productId) {
        Product product = productList.stream()
                .filter(p -> p.getProductId().equals(productId))
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource not found"));

        productList.remove(product);
        return "Product with productId: " + productId + " deleted";
    }

    @Override
    public Product updateProduct(Product product, Long productId) {
        Product prodcut = productList.stream()
                .filter(p -> p.getProductId().equals(productId))
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

        prodcut.setProductName(product.getProductName());
        prodcut.setProductDescription(product.getProductDescription());
        prodcut.setProductPrice(product.getProductPrice());
        prodcut.setIsSpecial(product.getIsSpecial());

        return prodcut;

    }
}
