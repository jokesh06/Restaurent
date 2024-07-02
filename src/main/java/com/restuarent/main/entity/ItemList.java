package com.restuarent.main.entity;



import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@NoArgsConstructor
@Entity
@Table(name="Itemlist")
@Builder
@Data

@AllArgsConstructor
public class ItemList 
{ 
	
@Id
 @GeneratedValue(strategy=GenerationType.AUTO)
   
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
    
   
   public ItemList(int quantity) {
       this.Quantity = quantity;
   }
 
  
   
}
