package com.restuarent.main.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restuarent.main.entity.Menu;

public interface MenuDao extends JpaRepository<Menu,Integer> {

}
