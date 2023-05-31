package com.await.backend.shoppingcartapp.backend.shoppingcartapp.controllers;

import com.await.backend.shoppingcartapp.backend.shoppingcartapp.models.entities.Product;
import com.await.backend.shoppingcartapp.backend.shoppingcartapp.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private ProductService service;
    @GetMapping("/products")
    public List<Product> list() {
        return service.findAll();
    }
}
