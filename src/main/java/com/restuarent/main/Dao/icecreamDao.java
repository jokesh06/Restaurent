package com.restuarent.main.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restuarent.main.entity.Icecreams;
import com.restuarent.main.entity.ItemList;

public interface icecreamDao extends JpaRepository<Icecreams,Integer>{

}
