package com.restuarent.main.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.restuarent.main.entity.restuarent_branches;

import jakarta.transaction.Transactional;

public interface RestaurentBranchDao extends JpaRepository<restuarent_branches,Integer> 
{
	
   @Query("select c from restuarent_branches c where branch_name= :branch_name") 
	restuarent_branches findbybranch_name(@Param("branch_name") String branch_name);
   @Modifying
   @Query("DELETE FROM restuarent_branches c WHERE c.branch_name = :branch_name")
     @Transactional
    public void deletebybranch_name(@Param("branch_name") String branch_name);
  
}
