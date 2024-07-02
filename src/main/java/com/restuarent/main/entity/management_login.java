package com.restuarent.main.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="management_login")
public class management_login 
{   @Id
	 @GeneratedValue(strategy=GenerationType.AUTO)
    private String User_name;
    private String Email_id;
    private String password;
    
    
}
