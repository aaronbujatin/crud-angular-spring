package com.aaronbujatin.backend.ecommerce.computer.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "tbl_product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long productId;

    private String productName;

    private Double productPrice;

    private String productDescription;

    @Column(name = "image", unique = false, nullable = true, length = 100000)
    private byte[] productImage;

    public Product(String productName, Double productPrice, String productDescription) {

        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
    }
}
