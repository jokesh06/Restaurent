package com.restuarent.main.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.restuarent.main.entity.Customer_register;
import jakarta.transaction.Transactional;

public interface customerDao extends JpaRepository<Customer_register,String> 
{  
	@Query("SELECT c FROM Customer_register c WHERE c.customer_first_name = :first  AND c.email_id = :email  AND c.customer_password = :password")
	public Customer_register findbycustomer_first_nameAndemail_idAndcustomer_password(@Param("first")String firstname,@Param("email")String email_id,@Param("password")String customer_password);
	
	@Query("DELETE FROM Customer_register c WHERE c.customer_first_name = :firstName")
	@Transactional
	public void deletebycustomer_first_name(@Param("firstName") String firstName);
	
	@Query("select c from Customer_register c where c.customer_first_name = :customer_first_name")
	public Customer_register findbycustomer_first_name(@Param("customer_first_name")String customer_first_name);
}
