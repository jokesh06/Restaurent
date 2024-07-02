package com.restuarent.main.entity;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="customer_register")
public class Customer_register 
{
   @Id
   private String customer_first_name;
   private String customer_last_name;
   private String mobile_no;
   private String email_id;
   private String customer_location;
   private String customer_password;
   private String customer_cpassword;
   
}
