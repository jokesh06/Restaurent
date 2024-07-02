package com.restuarent.main.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Table(name="cart")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Cart 
{   
      @Id
		private int id;
	    @Lob
	    @Column(length=5000000)
	   private byte[] item_image;
	   private String Item_name;
	   private int Quantity;
	   private int actual_price;
	   private double dicount;
	   private double discount_price;
	   private String category;
	   private Double paybleamount;
	   @PrePersist
	   @PreUpdate
	   public void calculatePayableAmount() {
	       double discountAmount = actual_price *(dicount / 100); // Calculate discount amount
	       double discountedPrice = actual_price - discountAmount; // Calculate discounted price
	       paybleamount = discountedPrice * Quantity; // Calculate payable amount
	   }
	   @OneToOne
	   @JoinColumn(name="id")
	   Orderlist OrderList;
	

}
