import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-restaurent-choosetype',
  templateUrl: './restaurent-choosetype.component.html',
  styleUrls: ['./restaurent-choosetype.component.css'],
})
export class RestaurentChoosetypeComponent {
  NumberOfrecoders: Object;
  dataArray: any[];
  response1: any[];
  arr1: any;
  searchText: any;
  isSearching: boolean =true;
  searchitem:any;
  isSearching1: boolean=false;
  SearchForm: any;
  minPriceInput: any;
  maxPriceInput: any;
  category:String="";
  show: boolean;
  menulist: Object;

  constructor(
    private __router: Router,
    private restaurentService: RestautarentService
  ) {
     

    this.restaurentService.get_items().subscribe((data) => {
      console.log(data);
      console.log("hello");
      this.arr1 = data;
      console.log(this.arr1)
    });
    this.restaurentService.getMenu().subscribe((data)=>{
      console.log("jokesj")
      console.log(data);
      this.menulist=data;
    })
  
    this.hello();
   
  }
  hello() {
    this.restaurentService.getCartDetails().subscribe((response) => {
      console.log(response);
      this.response1 = response as any[];
      this.NumberOfrecoders = this.response1.length;
      console.log(this.NumberOfrecoders);
    });
  }
  searchItem(id: any) {
    this.searchitem = id;
    console.log(id);
    if(id.length!=null&& id!='')
      {
      this.isSearching = false;
    this.isSearching1 = true;
      }
      else{
        this.isSearching=true;
        this.isSearching1 = false;
      }
  }
  SearchCuisen()
  { console.log(this.category);
    this.restaurentService.seearchItemByfilter(this.category,this.maxPriceInput,this.minPriceInput).subscribe((data)=>{
          console.log(data);
          this.arr1=data;
          this.isSearching1=true
          this.isSearching=false
    })
  }
 
  focus()
  {
    
  }
  searchForm() {}
  selectcategory(selectedValue: any) {
    const selected=selectedValue.trim();
     console.log(typeof(selected))
    switch (selected) {
      case "Special Items":
         
        this.category= "Special Items";
         console.log(this.category)
        break;
      case "Milk Shakes":
       
        this.category= "Milk Shakes";
        console.log(this.category)
        break;
      case "VegItems":
        
        this.category= "VegItems";
        console.log(this.category)
        break;
      case "Non VegItem":
        
       
        this.category = "Non VegItem";
        console.log(this.category)
        break;
      case "Icecreams":
       
        this.category= "Icecreams";
        console.log(this.category)
        break;
      case "Tiffine":
        
        this.category = "Tiffine";
        console.log(this.category)
        break;
      case "Soups":
       
        this.category = "Soups";
         console.log(this.category)
        break;

      default:
        this.category = "";
        this.category = "";
        break;
    }
  }
  selectPrice(selectedValue: any) {
   
           
    
    const selected=selectedValue.trim();
    switch (selected) {
     
      case "100":
       
        this.minPriceInput = 0;
        this.maxPriceInput= 100;
        console.log(this.minPriceInput,this.maxPriceInput);
        break;
      case "200":
       
        this.minPriceInput = 100;
        this.maxPriceInput= 200;
        console.log(this.minPriceInput,this.maxPriceInput);
        break;
      case "300":
        
        this.minPriceInput= 200;
        this.maxPriceInput= 300;
        console.log(this.minPriceInput,this.maxPriceInput);
        break;
        case "400":
        
        this.minPriceInput= 300;
        this.maxPriceInput= 400;
        console.log(this.minPriceInput,this.maxPriceInput);
        break;
        case "600":
        
        this.minPriceInput= 500;
        this.maxPriceInput= 600;
        console.log(this.minPriceInput,this.maxPriceInput);
        break;
        case "800":
        
        this.minPriceInput= 600;
        this.maxPriceInput= 800;
        console.log(this.minPriceInput,this.maxPriceInput);
        break;
        case "1000":
        
        this.minPriceInput= 800;
        this.maxPriceInput= 1000;
        console.log(this.minPriceInput,this.maxPriceInput);
        break;
      // Add more cases as needed
      default:
        this.minPriceInput= 100;
        this.maxPriceInput= 400;
        console.log(this.minPriceInput,this.maxPriceInput);
        break;
    }
  }
  applyfilter()
  {

  }
 

  toggleSearch() {
    this.isSearching = false;
  }
  toggleSearch1() {
    this.isSearching = true;
  }
  get_nonveg() {
    //this.__router.navigate(['/nonveg_item']);
    this.show = !this.show;
  }
  get_vegitems() {
    this.__router.navigate(['/veg_items']);
  }
  get_tffines() {
    this.__router.navigate(['/tiffin_items']);
  }
  get_milkshakes() {
    this.__router.navigate(['/milkshakes_items']);
  }
  get_icecreams() {
    this.__router.navigate(['/icecreams_items']);
  }
  get_soups() {
    this.__router.navigate(['/soups_items']);
  }
  get_special() {
    this.__router.navigate(['/customer_ui']);
  }
  AddToCart(id:any)
{
  this.restaurentService.addtoCart(id).subscribe((data)=>
    console.log(data));
}
getMenuItems(id:any)
{
  this.__router.navigate([`/${id}`]);
}
  
}
