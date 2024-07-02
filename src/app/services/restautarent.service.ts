import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestautarentService 
{
    url:String="http://localhost:8083/";
  handleError: any;

  constructor(private __http:HttpClient)
   {
    
    }
    get_management()
    {
      return this.__http.get(this.url+`management`)
    }
    submit_itemlist(id:any, files)
    {
      console.log(id);
      // const httpheaders=new HttpHeaders({
      //   'Content-Type':' multipart/form-data',
      //     })
      
      const formdata: FormData = new FormData();
      formdata.append('images', files); 
      formdata.append('Item_name', id.Item_name);
      formdata.append('Quantity', id.Quantity);
      formdata.append('actual_price', id.actual_price);
      formdata.append('Discount', id.Discount);
      formdata.append('category',id.category)

      return this.__http.post(this.url+`add_item`,formdata)
    }
    get_items(): Observable<any> 
    {
      return this.__http.get(this.url+`get_items`);
    }
    update_item(id:any,files)
    {    
        console.log(id.Quantity);
      const formdata: FormData = new FormData();
      formdata.append('images', files); 
      formdata.append('Item_name', id.Item_name);
      formdata.append('Quantity', id.Quantity);
      formdata.append('actual_price', id.actual_price);
      formdata.append('Discount', id.discount);
      console.log(formdata.get('Item_name'));
      console.log(formdata.get('Quantity'));
      return this.__http.put(this.url+`update_item`,formdata)
    }
    get_itemfind(id:any)
    {     
        console.log(id);
         return this.__http.get(this.url+`get_items/`+id)
    }
     delete_item(id:any)
     {
      return this.__http.delete(this.url+`delete_item/`+id)
     }
     post_customer(id:any)
     {
       return this.__http.post(this.url+`customer2`,id);
     }
     get_customer()
     {
      return this.__http.get(this.url+`getcustomer`);
     }
      get_milkshakes()
      {
        return this.__http.get(this.url+`getItemcatogory/Milk Shakes`);
      }
      get_vegitems()
      {
        return this.__http.get(this.url+`getItemcatogory/VegItems`);
      }
      get_soups()
      {
        return this.__http.get(this.url+`getItemcatogory/Soups`);
      }
      get_nonvegitems()
      {
        return this.__http.get(this.url+`getItemcatogory/Non vegItem`);
      }
      get_icecreams()
      {
        return this.__http.get(this.url+`getItemcatogory/icecreams`);
      }
      get_tiffines()
      {
        return this.__http.get(this.url+`getItemcatogory/Tiffines`)
      }
      submit_nonvegitems(id:any, files)
    {
      console.log(id);
      // const httpheaders=new HttpHeaders({
      //   'Content-Type':' multipart/form-data',
      //     })
      
      const formdata: FormData = new FormData();
      formdata.append('item_image', files); 
      formdata.append('Item_name', id.item_name);
      formdata.append('price', id.item_price);
      formdata.append('item_offer', id.item_offer);
      formdata.append('item_description', id.item_description);

      return this.__http.post(this.url+`add_nonvegitems`,formdata)
    }
    submit_tiffinitems(id:any, files)
    {
      console.log(id);
      // const httpheaders=new HttpHeaders({
      //   'Content-Type':' multipart/form-data',
      //     })
      
      const formdata: FormData = new FormData();
      formdata.append('item_image', files); 
      formdata.append('Item_name', id.item_name);
      formdata.append('price', id.item_price);
      formdata.append('item_offer', id.item_offer);
      formdata.append('item_description', id.item_description);

      return this.__http.post(this.url+`add_tiffins`,formdata)
    }
    submit_icecreamitems(id:any, files)
    {
      console.log(id);
      // const httpheaders=new HttpHeaders({
      //   'Content-Type':' multipart/form-data',
      //     })
      
      const formdata: FormData = new FormData();
      formdata.append('item_image', files); 
      formdata.append('Item_name', id.item_name);
      formdata.append('price', id.item_price);
      formdata.append('item_offer', id.item_offer);
      formdata.append('item_description', id.item_description);

      return this.__http.post(this.url+`add_icecreams`,formdata)
    }
    submit_vegitems(id:any, files)
    {
      console.log(id);
      // const httpheaders=new HttpHeaders({
      //   'Content-Type':' multipart/form-data',
      //     })
      
      const formdata: FormData = new FormData();
      formdata.append('item_image', files); 
      formdata.append('Item_name', id.item_name);
      formdata.append('price', id.item_price);
      formdata.append('item_offer', id.item_offer);
      formdata.append('item_description', id.item_description);

      return this.__http.post(this.url+`add_vegitems`,formdata)
    }
    submit_soupitems(id:any, files)
    {
      console.log(id);
      // const httpheaders=new HttpHeaders({
      //   'Content-Type':' multipart/form-data',
      //     })
      
      const formdata: FormData = new FormData();
      formdata.append('item_image', files); 
      formdata.append('Item_name', id.item_name);
      formdata.append('price', id.item_price);
      formdata.append('item_offer', id.item_offer);
      formdata.append('item_description', id.item_description);

      return this.__http.post(this.url+`add_soups`,formdata)
    }
    submit_milkshakeitems(id:any, files)
    {
      console.log(id);
      // const httpheaders=new HttpHeaders({
      //   'Content-Type':' multipart/form-data',
      //     })
      
      const formdata: FormData = new FormData();
      formdata.append('item_image', files); 
      formdata.append('Item_name', id.item_name);
      formdata.append('price', id.item_price);
      formdata.append('item_offer', id.item_offer);
      formdata.append('item_description', id.item_description);

      return this.__http.post(this.url+`add_milkshake`,formdata)
    }
    addtoCart(id:any)
    {
      return this.__http.get(this.url+`addToCart/`+id)
    }
    getCartDetails()
    {
      return this.__http.get(this.url+`CartDetails`);
    }
    updateQuantity(id:any,Quantity:any)
    {
            const id1= JSON.stringify(id);
           console.log(id,Quantity);
        return this.__http.patch(this.url+`Quantity/`+id,Quantity)
    }
    deletCartitem(id:any)
    {
     return this.__http.delete(this.url+`deleteCartitem/`+id);
    }
    seearchItemByfilter(id:any,minprice:any,id1:any)
    {
        console.log(id,id1,minprice);
      const fullUrl = `${this.url}searchItem/${id}/${minprice}/${id1}`;
      return this.__http.get(this.url+`searchItem/${id}/${id1}/${minprice}`).pipe(
        catchError(this.handleError)
        
      );
    }
    addMenu(files,id:any)
    {
      const formdata: FormData = new FormData();
      formdata.append('item_image', files); 
      formdata.append('Item_name', id.Item_name);
      return this.__http.post(this.url+`addMenu`,formdata);
     
    }
    getMenu()
    {
      return this.__http.get(this.url+`getmenu`);
    }
    getMenuItmes(id:any)
    {
         return this.__http.get(this.url+`getItemcatogory/`+id)
    }
   

}
