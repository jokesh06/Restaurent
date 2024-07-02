//package com.restuarent.main.service;
//
//import java.util.Collections;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import com.restuarent.main.Dao.customerDao;
//import com.restuarent.main.entity.customer_register;
//@Service
//public class myuserDetailservice implements UserDetailsService
//{  @Autowired
//   customerDao repo;
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		// TODO Auto-generated method stub
//		
//				customer_register user=repo.findbycustomer_first_name(username);
//				return new User(user.getCustomer_first_name(),user.getCustomer_password(),Collections.emptyList());
//		
//		
//		
//		
//		
//		
//	}
//	public boolean saveUser(customer_register user)
//	{
//		user=repo.save(user);
//		return user.getCustomer_first_name()!=null;
//	}
//
//}
