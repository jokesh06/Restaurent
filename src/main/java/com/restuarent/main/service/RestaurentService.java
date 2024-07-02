package com.restuarent.main.service;

import java.io.IOException;

import java.util.List;
import org.springframework.web.multipart.MultipartFile;

import com.restuarent.main.entity.Customer_register;
import com.restuarent.main.entity.Icecreams;
import com.restuarent.main.entity.ItemList;
import com.restuarent.main.entity.Milkshakes;
import com.restuarent.main.entity.NonvegItmes;
import com.restuarent.main.entity.Tiffins;
import com.restuarent.main.entity.VegItmes;
import com.restuarent.main.entity.management_login;
import com.restuarent.main.entity.restuarent_branches;

public interface RestaurentService 
{

  public void customer_rigester(Customer_register customer);
  public Customer_register Update_customer( Customer_register  customerUpd);
  public void delete_customer(Customer_register  customerUpd);
  
  public List<Customer_register> customer_details();
  public String add_item(MultipartFile file,String itemName,int Discount, int item_price,int Quantity,String category  ) throws IOException;
  public void update_item(MultipartFile file,String itemName,int Discount, int item_price,int Quantity) throws IOException;
  public void delete_item(String ItemList);
  public ItemList get_items(String file_name) throws IOException;
  public void add_branch(restuarent_branches restuarent_branches);
  public restuarent_branches update_branch(restuarent_branches restuarent_branches);
  public List<restuarent_branches> get_branches();
  public void delete_branch(restuarent_branches restuarent_branches);
  public List<management_login> get_management();
  public  List<management_login> get_managemnt_log(management_login management_login);
  public List<ItemList> get_itemslist();
  public String add_milkshakes(MultipartFile file,String itemName,int price, String item_description,int offer) throws IllegalStateException, IOException;
  public List<Milkshakes> get_milkshakes();
  public String add_Tiffins(MultipartFile file,String itemName,int price, String item_description,int offer) throws IllegalStateException, IOException;
  public List<Tiffins> get_Tiffins();
  public String add_NonvegItmes(MultipartFile file,String itemName,int price, String item_description,int offer) throws IllegalStateException, IOException;
  public List<NonvegItmes> get_NonvegItmes();
  public String add_VegItmes(MultipartFile file,String itemName,int price, String item_description,int offer) throws IllegalStateException, IOException;
  public List<VegItmes> get_VegItmes();
  public String add_soups(MultipartFile file,String itemName,int price, String item_description,int offer) throws IllegalStateException, IOException;
  public List<com.restuarent.main.entity.soups> get_soups();
  
  
  public String add_icecreams(MultipartFile file,String itemName,int price, String item_description,int offer) throws IllegalStateException, IOException;
  public List<Icecreams> get_icecreams();
 // public Role Createnewrole(Role role);
  
  
  
}
