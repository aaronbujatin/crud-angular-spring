package com.aaronbujatin.backend.ecommerce.computer.service;

import com.aaronbujatin.backend.ecommerce.computer.entity.Product;
import com.aaronbujatin.backend.ecommerce.computer.exception.ProductNotFound;
import com.aaronbujatin.backend.ecommerce.computer.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    public Product getProductById(Long id){
        return productRepository.findProductByProductId(id).orElseThrow(() ->
                new ProductNotFound("Product id : " + id + " was not found"));
    }

    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public Product updateProduct(Product product){
        return productRepository.save(product);
    }


    public void deleteProductById(Long id){
        productRepository.deleteProductByProductId(id).orElseThrow(() ->
                new ProductNotFound("Cannot delete, Product id : " + id + " was not found!"));
    }

}
