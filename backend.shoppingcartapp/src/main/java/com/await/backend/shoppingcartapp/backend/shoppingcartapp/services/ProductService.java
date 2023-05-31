package com.await.backend.shoppingcartapp.backend.shoppingcartapp.services;

import com.await.backend.shoppingcartapp.backend.shoppingcartapp.models.entities.Product;

import java.util.List;

public interface ProductService {
    List<Product> findAll();
}
