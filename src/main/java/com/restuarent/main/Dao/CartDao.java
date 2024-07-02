package com.restuarent.main.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restuarent.main.entity.Cart;

public interface CartDao extends JpaRepository<Cart,Integer> 
{
    
}
