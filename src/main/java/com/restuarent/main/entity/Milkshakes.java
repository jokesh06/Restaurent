package com.restuarent.main.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="milkshakes")
@Builder
public class Milkshakes 
{
	@Id
	 @GeneratedValue(strategy=GenerationType.AUTO)
	public int id;
	public String item_name;
	public int item_price;
	public String item_description;
	public int item_offer;
	@Lob
    @Column(length=5000000)
	public byte[] item_image;
}
