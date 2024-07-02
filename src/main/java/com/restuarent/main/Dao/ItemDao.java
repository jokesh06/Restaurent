package com.restuarent.main.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.restuarent.main.entity.ItemList;



public interface ItemDao extends JpaRepository<ItemList,Integer>
{
    
	@Query(value="select * from ItemList c where c.Item_name= :Item_name",nativeQuery=true)
	    public ItemList findbyItem_name(@Param("Item_name")String Item_name );
	
	@Query(value="select * from ItemList c where c.category= :category",nativeQuery=true)
          public List<ItemList> findbycategory(@Param("category")String category );
	   @Modifying
	  @Query("DELETE FROM ItemList  c WHERE c.Item_name = :Item_name")
	   @Transactional
	   public void deletebyItem_name(@Param("Item_name")String Item_name );
	   @Query(value="Update ItemList c set c.Quantity= :Quantity where c.id=:id ",nativeQuery=true)
	    public ItemList updateQuantity(@Param("Quantity") int Quantity,@Param("id") int id);
	   
	  @Query(value= "select * from ItemList c where c.category= :category and c.actual_price between :minprice and :actual_price",nativeQuery=true)
	   public List<ItemList> findByItem_nameOrcategoryOractual_price(@Param("category") String category,@Param("actual_price") int actual_price,@Param("minprice") int minprice);
	   
	  
	      
}
