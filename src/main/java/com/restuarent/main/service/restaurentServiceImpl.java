package com.restuarent.main.service;

import java.io.File;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.restuarent.main.Dao.*;
import com.restuarent.main.Dao.RestaurentBranchDao;
import com.restuarent.main.Dao.customerDao;
import com.restuarent.main.Dao.managementDao;
import com.restuarent.main.Dao.milkshakesDao;
import com.restuarent.main.entity.Cart;
import com.restuarent.main.entity.Customer_register;
import com.restuarent.main.entity.Icecreams;
import com.restuarent.main.entity.ItemList;
import com.restuarent.main.entity.Menu;
import com.restuarent.main.entity.Milkshakes;
import com.restuarent.main.entity.NonvegItmes;
import com.restuarent.main.entity.Tiffins;
import com.restuarent.main.entity.VegItmes;
import com.restuarent.main.entity.management_login;
import com.restuarent.main.entity.restuarent_branches;
import com.restuarent.main.entity.soups;

@Service
public class restaurentServiceImpl implements RestaurentService {
    
	@Autowired
	customerDao customerdao;
    @Autowired
    ItemDao itemdao;
    @Autowired
    managementDao managementdao;
    @Autowired
    RestaurentBranchDao RestaurentBranchdao;
    @Autowired
    milkshakesDao milkshakesDao;
    @Autowired
    com.restuarent.main.Dao.nonvegitmesDao nonvegitmesDao;
    @Autowired
    com.restuarent.main.Dao.soupsDao soupsDao;
    @Autowired
    com.restuarent.main.Dao.tifiinesDao tifiinesDao;
    @Autowired
    com.restuarent.main.Dao.vegitemsDao vegitemsDao;
    @Autowired
    com.restuarent.main.Dao.icecreamDao icecreamDao;
    @Autowired
      com.restuarent.main.Dao.CartDao CartDao;
    @Autowired
    ItemDao ItemDao;
    @Autowired
    MenuDao MenuDao;
    
    
	
	    
    private final String filePath="C:\\Users\\ankes\\Documents\\workspace-spring-tool-suite-4-4.20.1.RELEASE\\Restaurent\\images\\";
   
    
    
    @Override
	public void customer_rigester(Customer_register customer) 
    {
    	
    	
    	customerdao.save(customer) ;  
		
	}
	@Override
	public List<Customer_register> customer_details()
	{
		
		return customerdao.findAll();
	}

	@Override
	public Customer_register Update_customer(Customer_register  customerUpd) 
	{ 
		
		Customer_register  opt=customerdao.findbycustomer_first_nameAndemail_idAndcustomer_password(customerUpd.getCustomer_first_name(), customerUpd.getEmail_id(),customerUpd.getCustomer_password());
		             opt.setCustomer_first_name(customerUpd.getCustomer_first_name());
		             opt.setCustomer_last_name(customerUpd.getCustomer_last_name());
		             opt.setCustomer_location(customerUpd.getCustomer_location());
		             opt.setEmail_id(customerUpd.getEmail_id());
		             opt.setCustomer_password(customerUpd.getCustomer_password());
		             opt.setCustomer_cpassword(customerUpd.getCustomer_cpassword());
		         return customerdao.save(opt);
		
	
	}

	@Override
	public void delete_customer(Customer_register  customerdel)
	{
		
	 customerdao.deletebycustomer_first_name(customerdel.getCustomer_first_name());
		               
		
		

		
		
	}

	

	@Override
	public String add_item(MultipartFile file,String itemName,int Discount, int item_price,int Quantity, String category ) throws IllegalStateException, IOException
	{
		   
		String filepath1=filePath+file.getOriginalFilename();
		
	         
		ItemList item=itemdao.save(ItemList.builder().
				Item_name(itemName).Quantity(Discount)
	        		  .dicount(Quantity).discount_price(Discount).actual_price(item_price).category(category).item_image(file.getBytes())
	        		  .build());   
		file.transferTo(new File(filepath1));
		if(item!=null)
		{
			return "upload Successully";
		}
		return null;
	   }

	@Override
	public void update_item(MultipartFile file,String itemName,int Discount, int item_price,int Quantity) throws IOException {
		ItemList ItemList1=itemdao.findbyItem_name(itemName);
		ItemList1.setItem_image(file.getBytes()); 
		ItemList1.setActual_price(item_price);
		ItemList1.setDicount(Discount);
		
		ItemList1.setQuantity(Quantity);
		 itemdao.save(ItemList1);
		
	}

	@Override
	public void delete_item(String ItemList) 
	{
		
		itemdao.deletebyItem_name(ItemList);
	}

	@Override
	public ItemList get_items(String file_name) throws IOException 
	{
		        
		 
		 
		  
		return itemdao.findbyItem_name(file_name);
	}
	

	@Override
	public void add_branch(restuarent_branches restuarent_branches) {
	
		RestaurentBranchdao.save(restuarent_branches);
	}

	@Override
	public   restuarent_branches update_branch(restuarent_branches restuarent_branches)
	{
		restuarent_branches branch	=RestaurentBranchdao.findbybranch_name(restuarent_branches.getBranch_name());
		                    branch.setBranch_name(restuarent_branches.getBranch_name());
		                    branch.setBranch_email(restuarent_branches.getBranch_email());
		                    branch.setBranch_contactno(restuarent_branches.getBranch_contactno());
		                    branch.setBranch_address(restuarent_branches.getBranch_address());
		                    branch.setBranch_pincode(restuarent_branches.getBranch_pincode());
		        
		return RestaurentBranchdao.save(branch);
		
		
		
	}

	@Override
	public List<restuarent_branches> get_branches() {
		
		return RestaurentBranchdao.findAll();
	}
	@Override
	public void delete_branch(restuarent_branches restuarent_branches)
	{
		
		RestaurentBranchdao.deletebybranch_name(restuarent_branches.getBranch_name());
	}
	@Override
	public List<management_login> get_management() 
	{
		return  managementdao.findAll();
		
	}
	@Override
	public List<management_login> get_managemnt_log(management_login management_login) {
		
		return managementdao.findByUser_nameandEmail_idandpassword(management_login.getUser_name(),management_login.getEmail_id(), management_login.getPassword());
		
	}
	@Override
	public List<ItemList> get_itemslist() {
		//Pageable pageable=PageRequest.of(pagenumber,0);
		return itemdao.findAll();
	}
	@Override
	public String add_milkshakes(MultipartFile file,String itemName,int price, String item_description,int offer) throws IllegalStateException, IOException {
	
		String filepath1=filePath+file.getOriginalFilename();
		
        
		Milkshakes milkshakes1=milkshakesDao.save(Milkshakes.builder().item_name(itemName).item_price(price)
				.item_offer(offer).item_image(file.getBytes()).item_description(item_description).build());
		file.transferTo(new File(filepath1));
		if(milkshakes1!=null)
		{
			return "upload Successully";
		}
		return null;
	   }
	
	@Override
	public List<Milkshakes> get_milkshakes() {
		
		return milkshakesDao.findAll();
	}
	@Override
	public String add_Tiffins(MultipartFile file,String itemName,int price, String item_description,int offer) throws IllegalStateException, IOException
	{
		String filepath1=filePath+file.getOriginalFilename();
		Tiffins Tiffins1=tifiinesDao.save(Tiffins.builder().item_name(itemName).item_price(price)
				.item_offer(offer).item_image(file.getBytes()).item_description(item_description).build());
		file.transferTo(new File(filepath1));
		if(Tiffins1!=null)
		{
			return "upload Successully";
		}
		return null;
	   }
		
	
	@Override
	public List<Tiffins> get_Tiffins() {
		
		return tifiinesDao.findAll();
	}
	@Override
	public String add_NonvegItmes(MultipartFile file,String itemName,int price, String item_description,int offer) throws IllegalStateException, IOException {
		  
		String filepath1=filePath+file.getOriginalFilename();
		NonvegItmes NonvegItmes1=nonvegitmesDao.save(NonvegItmes.builder().item_name(itemName).item_price(price)
				.item_offer(offer).item_image(file.getBytes()).item_description(item_description).build());
		file.transferTo(new File(filepath1));
		if(NonvegItmes1!=null)
		{
			return "upload Successully";
		}
		return null;
	   }
		
	
	@Override
	public List<NonvegItmes> get_NonvegItmes() {
		
		return nonvegitmesDao.findAll();// TODO Auto-generated method stub
		
	}
	@Override
	public String add_VegItmes(MultipartFile file, String itemName, int price, String item_description, int offer) throws IllegalStateException, IOException {
		String filepath1=filePath+file.getOriginalFilename();
		VegItmes VegItmes1=vegitemsDao.save(VegItmes.builder().item_name(itemName).item_price(price)
				.item_offer(offer).item_image(file.getBytes()).item_description(item_description).build());
		file.transferTo(new File(filepath1));
		if(VegItmes1!=null)
		{
			return "upload Successully";
		}
		return null;
	   
		
	}
	@Override
	public List<VegItmes> get_VegItmes() {
		// TODO Auto-generated method stub
		return vegitemsDao.findAll();
	}
	@Override
	public String add_soups(MultipartFile file,String itemName,int price, String item_description,int offer) throws IllegalStateException, IOException {
		String filepath1=filePath+file.getOriginalFilename();
		soups soups1=soupsDao.save(soups.builder().item_name(itemName).item_price(price)
				.item_offer(offer).item_image(file.getBytes()).item_description(item_description).build());
		file.transferTo(new File(filepath1));
		if(soups1!=null)
		{
			return "upload Successully";
		}
		return null;
	   }
		
		
	
	@Override
	public List<soups> get_soups() {
		
		return soupsDao.findAll();
	}
	@Override
	public String add_icecreams(MultipartFile file, String itemName, int price, String item_description, int offer)
			throws IllegalStateException, IOException
	{
		
		String filepath1=filePath+file.getOriginalFilename();
		Icecreams Icecreams1=icecreamDao.save(Icecreams.builder().item_name(itemName).item_price(price)
				.item_offer(offer).item_image(file.getBytes()).item_description(item_description).build());
		file.transferTo(new File(filepath1));
		if(Icecreams1!=null)
		{
			return "upload Successully";
		}
		
		return null;
		}
	   
		
	
	@Override
	public List<Icecreams> get_icecreams() {
		
		return icecreamDao.findAll();
	}
	
	
	public Cart addToCart(String ItemName)
	{
		ItemList List1=ItemDao.findbyItem_name(ItemName);
		   Cart cart=new Cart();
		        cart.setId(List1.getId());
		        cart.setItem_name(List1.getItem_name());
		        cart.setActual_price(List1.getActual_price());
		        cart.setCategory(List1.getCategory());
		        cart.setDicount(List1.getDicount());
		        cart.setItem_image(List1.getItem_image());
		        cart.setDiscount_price(List1.getDiscount_price());
		        cart.setQuantity(List1.getQuantity());
		
		return CartDao.save(cart);
	}
		
	public List<ItemList> GetItemCategorywise(String category)
	{   
		             
		return ItemDao.findbycategory(category);
		
	}
	public List<Cart> GetCartDetails()
	{
		return CartDao.findAll();
		
	}
	public Cart UpdateQuantity(int id,ItemList i)
	{       
		      Cart item12=CartDao.findById(id).get();
		      System.out.println(item12);
		      item12.setQuantity(i.getQuantity());
		      return CartDao.save(item12);
		    
	         
//		 ItemDao.save(item12);
		
	}
	public void  DeleteCartItem(int id)
	{
		CartDao.deleteById(id);
	}
	public List<ItemList> searchItemByItemNamecategoryactual_price(String category,int price,int minprice)
	{
		return   ItemDao.findByItem_nameOrcategoryOractual_price( category, price,minprice);
	}
   public  void addMenu( MultipartFile file, String itemName) throws IOException
   {
	   String filepath1=filePath+file.getOriginalFilename();
	       Menu menu1=MenuDao.save(Menu.builder().Item_name(itemName).item_image(file.getBytes()).build());
	      
	   
   }
		
   public List<Menu> getMenu()
   {
	   return MenuDao.findAll();
   }
		    
		
		
		
		    
	}
	
	

	

	

