package com.sis.project.model;

public class Product {
    private Long productId;
    private String productName;
    private String productDescription;
    private Double productPrice;
    private String categoryName;
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
