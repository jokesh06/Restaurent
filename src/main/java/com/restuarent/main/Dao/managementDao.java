package com.restuarent.main.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.restuarent.main.entity.management_login;

public interface managementDao extends JpaRepository<management_login,String> 
{  
@Query("select c from management_login c  where c.User_name= :User_name and c.Email_id= :Email_id and c.password= :password")
	  public List<management_login> findByUser_nameandEmail_idandpassword(@Param("User_name")String User_name,@Param("Email_id")String Email_id,@Param("password") String password);
}
