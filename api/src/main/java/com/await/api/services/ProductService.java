package com.await.api.services;

import com.await.api.models.entities.Product;

import java.util.List;

public interface ProductService {
    List<Product> findAll();
}
