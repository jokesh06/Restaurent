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
@Table(name="branchlist")
public class restuarent_branches 
{   @Id
	 @GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String branch_name;
	private String branch_email;
	private String branch_contactno;
	private String branch_address;
	private String branch_pincode;
	

}
