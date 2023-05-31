package com.await.backend.shoppingcartapp.backend.shoppingcartapp.repositories;

import com.await.backend.shoppingcartapp.backend.shoppingcartapp.models.entities.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {

}
