package com.await.backend.shoppingcartapp.backend.shoppingcartapp.services;

import com.await.backend.shoppingcartapp.backend.shoppingcartapp.models.entities.Product;
import com.await.backend.shoppingcartapp.backend.shoppingcartapp.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository repository;
    @Override
    @Transactional(readOnly = true)
    public List<Product> findAll() {
        return (List<Product>) repository.findAll();
    }
}
