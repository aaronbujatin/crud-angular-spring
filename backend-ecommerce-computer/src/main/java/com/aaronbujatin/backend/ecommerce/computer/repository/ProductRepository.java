package com.aaronbujatin.backend.ecommerce.computer.repository;

import com.aaronbujatin.backend.ecommerce.computer.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface ProductRepository extends JpaRepository<Product, Long> {

    Optional<Product> findProductByProductId(Long id);

    Optional<Product> deleteProductByProductId(Long id);


}
