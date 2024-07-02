package com.restuarent.main.frontController;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

//import com.restaurent.main.Authrequest.Authrequest;
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
import com.restuarent.main.service.RestaurentService;
//import  com.restaurent.main.SecurityInformation.jwtServicce;
//import  com.restuarent.main.entity.*;
//import com.restuarent.main.entity.customer_register;
//import com.restuarent.main.service.RestaurentService;
//import com.restuarent.main.service.jwtservice;
import com.restuarent.main.service.restaurentServiceImpl;
//import com.restuarent.main.service.myuserDetailservice;
@RestController
@CrossOrigin(origins="*",allowedHeaders="*")
public class Restaurent_frontController 
{   
	@Autowired
	restaurentServiceImpl serviceimpl;
    @Autowired
     RestaurentService service;
//    @Autowired
//    myuserDetailservice myuserDetailservice;
   // private  AuthenticationManager authManager;

//    @Autowired
//    jwtservice jwtservice1;
     @PostMapping("/customer2")
	public void customer_register(@RequestBody Customer_register customer)
	  {
		serviceimpl.customer_rigester(customer);  
	   }
     @GetMapping("/getcustomer")
     public List<Customer_register> get_customerDetails()
     {
    	 return serviceimpl.customer_details();
     }
     @PutMapping("/update_customer")
     
     public Customer_register Update_customer(@RequestBody Customer_register customer)
     {
		return serviceimpl.Update_customer(customer);
    	 
     }
     @DeleteMapping("delete_customer")
     public  String delete_customer(@RequestBody Customer_register customer)
     {
	serviceimpl.delete_customer(customer);
	    return "Deleted Successfully";
    	 
     }
     @PostMapping("/add_item")
     @CrossOrigin(origins="*",allowedHeaders="*")
     public ResponseEntity<?> add_item(@RequestParam("images") MultipartFile file,@RequestParam("Item_name") String Item_name,@RequestParam("Quantity") int Quantity, @RequestParam("actual_price") int actual_price,@RequestParam("Discount") int discount,@RequestParam("category") String Category) throws IOException
     {     
    	  
    	 
    	 System.out.println(file);
    	    String uploadImg=serviceimpl.add_item(file, Item_name,Quantity , actual_price, discount,Category);
    
    	
		return ResponseEntity.status(HttpStatus.OK).body(uploadImg);
    	 
     }
     @GetMapping("/get_items/{filename}")
     public ItemList getImg(@PathVariable String filename) throws IOException
     {
    	
    	 
		return serviceimpl.get_items(filename); 
    	 }
     @PostMapping("/add_branch")
     public void add_branch(@RequestBody restuarent_branches restuarent_branches)
     {
    	 serviceimpl.add_branch(restuarent_branches);
     }
     @PutMapping("/update_branch")
     public String update_branch(@RequestBody restuarent_branches restuarent_branches)
     {
    	 serviceimpl.update_branch(restuarent_branches);
		return "updated successfully";
    	 
     }
     @DeleteMapping("/delete_branch")
     public String delete_branch(@RequestBody restuarent_branches restuarent_branches)
     {
    	 serviceimpl.delete_branch(restuarent_branches);
    	    
		return "Deleted Successfully";
    	 
     }
     @GetMapping("/get_branches")
     public List<restuarent_branches>get_branches()

     { 
    	    return serviceimpl.get_branches();
    	 }
     @DeleteMapping("/delete_item/{ItemList}")
     public String delete_item(@PathVariable String ItemList)
     {
    	 serviceimpl.delete_item(ItemList);
    	 
		return "deleted Successfully";
    	 
     }
     @GetMapping("/management")
     public List<management_login> get_management()
     {
		
    	  return serviceimpl.get_management();
    	 
     }
     @GetMapping("/management_log")
     public List<management_login> get_management_log(@RequestBody management_login management_login)
     {
		
    	  return serviceimpl.get_managemnt_log(management_login);
    	  
    	  
    	 
     }
     @GetMapping("/get_items")
     public List<ItemList> get_itemlist(@RequestParam(defaultValue="0") int pagenumber)
     {
		return serviceimpl.get_itemslist();
    	 
     }
     @PutMapping(value = "/update_item")
     public String update_item( @RequestParam("images") MultipartFile file,@RequestParam("Item_name") String Item_name,@RequestParam("Quantity") int Quantity, @RequestParam("actual_price") int actual_price,@RequestParam("Discount") int discountt ) throws IOException
     {
    	 serviceimpl.update_item(file, Item_name,Quantity , actual_price, discountt);
		return "updated Successfully";
    	 
      }
       @PostMapping("/add_milkshake")
       public void add_milkshakes(@RequestParam("item_image") MultipartFile file,@RequestParam("Item_name") String Item_name,@RequestParam("price") int price, @RequestParam("item_offer") int item_offer, @RequestParam("item_description") String item_description) throws IllegalStateException, IOException
       {
    	   serviceimpl.add_milkshakes(file, Item_name, price, item_description, item_offer);
       }
       @GetMapping("/get_milkshakes")
       public List<Milkshakes> get_milkshakes()
       {
		return serviceimpl.get_milkshakes();
    	   
       }
       @PostMapping("/add_tiffins")
       public void add_tiffins(@RequestParam("item_image") MultipartFile file,@RequestParam("Item_name") String Item_name,@RequestParam("price") int price, @RequestParam("item_offer") int item_offer, @RequestParam("item_description") String item_description) throws IllegalStateException, IOException
       {
    	   serviceimpl.add_Tiffins(file, Item_name, price, item_description, item_offer);
    	   
       }
       @GetMapping("/get_tiffines")
       public List<Tiffins> get_tiffins()
       {
		return serviceimpl.get_Tiffins();
    	   
       }
       @PostMapping("/add_vegitems")
       public void add_vegitems(@RequestParam("item_image") MultipartFile file,@RequestParam("Item_name") String Item_name,@RequestParam("price") int price, @RequestParam("item_offer") int item_offer, @RequestParam("item_description") String item_description) throws IllegalStateException, IOException
       {
    	   serviceimpl.add_VegItmes(file, Item_name, price, item_description, item_offer);
       }
       @GetMapping("/get_vegitems")
       public List<VegItmes> get_vegitmes()
       {
		return serviceimpl.get_VegItmes();
	   }
       @PostMapping("/add_nonvegitems")
       public void add_nonvegitems(@RequestParam("item_image") MultipartFile file,@RequestParam("Item_name") String Item_name,@RequestParam("price") int price, @RequestParam("item_offer") int item_offer, @RequestParam("item_description") String item_description) throws IllegalStateException, IOException

       {
    	   serviceimpl.add_NonvegItmes(file, Item_name, price, item_description, item_offer);
       }
       @GetMapping("/get_nonvegitmes")
       public List<NonvegItmes> get_nonvegitems()
       {
		return serviceimpl.get_NonvegItmes();
    	   
       }
       @PostMapping("/add_soups")
        public void soup(@RequestParam("item_image") MultipartFile file,@RequestParam("Item_name") String Item_name,@RequestParam("price") int price, @RequestParam("item_offer") int item_offer, @RequestParam("item_description") String item_description) throws IllegalStateException, IOException
        {
        	serviceimpl.add_soups(file, Item_name, price, item_description, item_offer);
        }
       @GetMapping("/get_soups")
       public List<soups> get_soups()
       {
    	   return serviceimpl.get_soups();
       }
       @PostMapping("/add_icecreams")
      public void add_icecream(@RequestParam("item_image") MultipartFile file,@RequestParam("Item_name") String Item_name,@RequestParam("price") int price, @RequestParam("item_offer") int item_offer, @RequestParam("item_description") String item_description) throws IllegalStateException, IOException
      {
    	  serviceimpl.add_icecreams(file, Item_name, price, item_description, item_offer);
      }
       @GetMapping("/get_icecreams")
      public List<Icecreams> get_icecreams()
      {
		return serviceimpl.get_icecreams();
       }
//       @PostMapping("/register")
//   	public String registerUser(@RequestBody customer_register user)
//   	{
//   		PasswordEncoder encodedPwd = encoder.passwordEncoder(user.getCustomer_password());
//   		user.setCustomer_password(encodedPwd.toString());
//   		
//   		boolean saveUser = myuserDetailservice.saveUser(user);
//   		
//   		if(saveUser)
//   			return "User Registered Sucessfully";
//   		else
//   			return "Registration Failed";
//   	}
//       @PostMapping("/login")
//       public String UserAuthontication(@RequestBody Authrequest request1)
//       {
//    	   UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(request1.getUname(), request1.getUpwd());
//    	   try
//   		{
//   			Authentication auth=authManager.authenticate(token);
//   			if(auth.isAuthenticated())
//   				return jwtservice1.generateToken(request1.getUname());
//   		}
//   		catch(Exception e)
//   		{
//   			e.printStackTrace();
//   		}
//   		return "invalid";
//    	   
//    	   
//       }
       
         @GetMapping("/addToCart/{Item_name}")
         @CrossOrigin(origins="*",allowedHeaders="*")
         public Cart AddToCart(@PathVariable(name="Item_name") String Item_name)
         {
        	 return serviceimpl.addToCart(Item_name);
         }
         @GetMapping("/getItemcatogory/{category}")
         public List<ItemList> getItemCategorywise(@PathVariable(name="category") String category)
          {
        	  
			return serviceimpl.GetItemCategorywise(category);
        	 
        	 }
         @GetMapping("/CartDetails")
        public List<Cart> CartDetails()
        {
        	return serviceimpl.GetCartDetails();
        }
         @PatchMapping("/Quantity/{id}")
         public Cart UpdateQuantity(@PathVariable int id,@RequestBody ItemList i)
         {
        	 
			return serviceimpl.UpdateQuantity(id, i);
		}
         @DeleteMapping("/deleteCartitem/{id}")
        public String DeleteCartItem(@PathVariable int id)
        {
        	 serviceimpl.DeleteCartItem(id);
                   
        	 return "Deleted Successfully";
        }
         @GetMapping("/searchItem/{category}/{minprice}/{actual_price}")
         @CrossOrigin(origins="*",allowedHeaders="*")
         public List<ItemList> searchItemByItemNamecategoryactual_price(@PathVariable("category")String category,@PathVariable("actual_price") int  actual_price,@PathVariable("minprice")int minprice) throws IOException
         { 
      	    // int actualPriceValue   = actual_price != null ? actual_price.intValue(): 0; 
        	 return serviceimpl.searchItemByItemNamecategoryactual_price( category ,actual_price,minprice);
         }
         @PostMapping("/addMenu")
         @CrossOrigin(origins="*",allowedHeaders="*")
         public void addMenu(@RequestParam("item_image") MultipartFile file,@RequestParam("Item_name") String Item_name) throws IOException
         {
        	  serviceimpl.addMenu(file, Item_name);
			
        	 
         }
         @GetMapping("/getmenu")
        public List<Menu> getMeneItems()
        {
        	return serviceimpl.getMenu();
        }
}





