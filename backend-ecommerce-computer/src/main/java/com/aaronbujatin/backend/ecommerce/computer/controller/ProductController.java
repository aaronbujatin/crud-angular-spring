package com.aaronbujatin.backend.ecommerce.computer.controller;

import com.aaronbujatin.backend.ecommerce.computer.entity.Product;
import com.aaronbujatin.backend.ecommerce.computer.service.ProductService;
import com.aaronbujatin.backend.ecommerce.computer.util.ImageUtility;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin(value = "*")
@RequestMapping(value = "/api/v1/products")
@Log4j2
@Transactional
public class ProductController {
    private static final Logger logger = LogManager.getLogger(ProductController.class.getName());
    private final ProductService productService;

    @PostMapping(value = "/save", consumes = MediaType.MULTIPART_FORM_DATA_VALUE )
    public ResponseEntity<?> saveProduct(@RequestParam("productName") String productName,
                                         @RequestParam("productPrice") Double productPrice,
                                         @RequestParam("productDescription") String productDescription,
                                         @RequestParam("productImage")MultipartFile file) throws IOException {
        try {
            Product product = new Product(productName, productPrice, productDescription);
            product.setProductImage(file.getBytes());
            logger.info("saving products");
            return ResponseEntity.ok(productService.saveProduct(product));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving student: " + e.getMessage());
        }

//        product.setProductImage(ImageUtility.compressImage(file.getBytes()));
//        logger.info("saving products");
//        return ResponseEntity.ok(productService.saveProduct(product));
    }

    @GetMapping(value = "/{productId}")
    public ResponseEntity<Optional<Product>> getProductById(@PathVariable("productId") Long id){
        return ResponseEntity.ok(Optional.ofNullable(productService.getProductById(id)));
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProduct(Product product){
        return ResponseEntity.ok(productService.getProducts());
    }

    @PutMapping("/{productId}")
    public ResponseEntity<Product> updateProduct(@PathVariable("productId") Product product) throws IOException {

        return ResponseEntity.ok(productService.updateProduct(product));
    }

    @DeleteMapping("/{productId}")
    public String deleteProductById(@PathVariable("productId") Long id){
        productService.deleteProductById(id);
        return "Product successfully deleted";
    }

}
