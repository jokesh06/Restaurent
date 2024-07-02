import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeCompomentComponent } from './components/home-compoment/home-compoment.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';
import { UpdateItem1Component } from './components/update-item1/update-item1.component';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';
import { AllItemlistComponent } from './components/all-itemlist/all-itemlist.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { GetCustomersComponent } from './components/get-customers/get-customers.component';
import { CustomerUIComponent } from './components/customer-ui/customer-ui.component';
import { RestaurentHomeComponent } from './components/restaurent-home/restaurent-home.component';
import { RestaurentChoosetypeComponent } from './components/restaurent-choosetype/restaurent-choosetype.component';
import { RestaurentNonvegitemsComponent } from './components/restaurent-nonvegitems/restaurent-nonvegitems.component';
import { RestaurentVegitemsComponent } from './components/restaurent-vegitems/restaurent-vegitems.component';
import { RestaurentMilkshakesComponent } from './components/restaurent-milkshakes/restaurent-milkshakes.component';
import { RestaurentIcecreamsComponent } from './components/restaurent-icecreams/restaurent-icecreams.component';
import { RestaurentTiffinsComponent } from './components/restaurent-tiffins/restaurent-tiffins.component';
import { RestaurentSoupsComponent } from './components/restaurent-soups/restaurent-soups.component';
import { RestaurentAddVegitemsComponent } from './components/restaurent-add-vegitems/restaurent-add-vegitems.component';
import { RestaurentAddNonvegitemsComponent } from './components/restaurent-add-nonvegitems/restaurent-add-nonvegitems.component';
import { RestaurentAddIcecreamsComponent } from './components/restaurent-add-icecreams/restaurent-add-icecreams.component';
import { RestaurentAddMilkshakesComponent } from './components/restaurent-add-milkshakes/restaurent-add-milkshakes.component';
import { RestaurentAddSoupsComponent } from './components/restaurent-add-soups/restaurent-add-soups.component';
import { RestaurentAddTiffinsComponent } from './components/restaurent-add-tiffins/restaurent-add-tiffins.component';
import { AddTocartComponent } from './components/add-tocart/add-tocart.component';
import { AddmenuComponent } from './compoenents/addmenu/addmenu.component';

const routes: Routes = [
 
  {
    path:'',
    redirectTo:'/restaurent_home',
    pathMatch:'full'
 },
 
 
 
  {
  path:"CustomerRegistration",
  component:CustomerRegistrationComponent

 },
 
  {
  path:'login',
  component:LoginComponent
},

  {
    path:'home',
    component:HomeCompomentComponent
  },
  {
    path:'add_item',
    component:AddItemComponent
  },
  {
    path:'update_item',
    component:UpdateItemComponent
  },
  {
    path:'update/:item_name',
    component:UpdateItem1Component
  },
  {
    path:'delete_item/:item_name',
    component:DeleteItemComponent
  },
  {
    path:'all_items',
    component:AllItemlistComponent
  },
  {
    path:'MvR Special',
    component:CustomerUIComponent
  },
  {
    path:'customer_registration',
    component:CustomerRegistrationComponent
  },
  {
    path:'get_customer',
    component:GetCustomersComponent
  },
  {
    path:'customer_ui',
    component:CustomerUIComponent
  },
  {
    path:'restaurent_home',
    component:RestaurentHomeComponent
  },
  {
    path:'restaurent_choosy',
    component:RestaurentChoosetypeComponent
  },
  {
    path:'Non-vegItems',
    
    component:RestaurentNonvegitemsComponent
  },
  {
    path:'VegItems',
    component:RestaurentVegitemsComponent
  },
  {
    path:'MilkShakes',
    component:RestaurentMilkshakesComponent
  },
  {
    path:'Ice Creams',
    component:RestaurentIcecreamsComponent
  },
  {
    path:'Tiffines',
    component:RestaurentTiffinsComponent
  },
  {
    path:'Soups',
    component:RestaurentSoupsComponent
  },
  {
    path:'add_vegitems',
    component:RestaurentAddVegitemsComponent
  },
  {
    path:'add_nonvegItems',
    component:RestaurentAddNonvegitemsComponent
  },
  {
    path:'add_icecreams',
    component:RestaurentAddIcecreamsComponent
  },
  {
    path:'add_milkshakes',
    component:RestaurentAddMilkshakesComponent
  },
  {
    path:'add_soups',
    component:RestaurentAddSoupsComponent
  },
  {
    path:'add_tiffins',
    component:RestaurentAddTiffinsComponent
  },
  {
     path:'addToCart',
     component:AddTocartComponent
  },
  {
    path:'addmenu',
    component:AddmenuComponent
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
