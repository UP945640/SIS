package com.sis.project.model;

import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class Product {
    @Id
    private Long productId;
    @NotBlank(message = "Product name is mandatory")
    private String productName;
    @NotBlank(message = "Product description is mandatory")
    private String productDescription;
    @NotNull(message = "Product price is mandatory")
    @Positive(message = "Product price must be positive")
    private Double productPrice;
    @NotBlank(message = "Category name is mandatory")
    private String categoryName;
    @NotNull(message = "Special status is mandatory")
    private Boolean isSpecial;

    public Product(Long productId, String productName, String productDescription, Double productPrice, String categoryName, Boolean isSpecial) {
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.categoryName = categoryName;
        this.isSpecial = isSpecial;
    }


    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public Double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Double productPrice) {
        this.productPrice = productPrice;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Boolean getIsSpecial() {return isSpecial;}

    public void setIsSpecial(Boolean isSpecial) {this.isSpecial = isSpecial;}

}
