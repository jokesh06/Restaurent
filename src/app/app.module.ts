import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeCompomentComponent } from './components/home-compoment/home-compoment.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NgxCaptchaModule } from 'ngx-captcha';
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
import { RestaurentSoupsComponent } from './components/restaurent-soups/restaurent-soups.component';
import { RestaurentIcecreamsComponent } from './components/restaurent-icecreams/restaurent-icecreams.component';
import { RestaurentTiffinsComponent } from './components/restaurent-tiffins/restaurent-tiffins.component';
import { RestaurentMilkshakesComponent } from './components/restaurent-milkshakes/restaurent-milkshakes.component';
import { RestaurentAddMilkshakesComponent } from './components/restaurent-add-milkshakes/restaurent-add-milkshakes.component';
import { RestaurentAddTiffinsComponent } from './components/restaurent-add-tiffins/restaurent-add-tiffins.component';
import { RestaurentAddIcecreamsComponent } from './components/restaurent-add-icecreams/restaurent-add-icecreams.component';
import { RestaurentAddSoupsComponent } from './components/restaurent-add-soups/restaurent-add-soups.component';
import { RestaurentAddVegitemsComponent } from './components/restaurent-add-vegitems/restaurent-add-vegitems.component';
import { RestaurentAddNonvegitemsComponent } from './components/restaurent-add-nonvegitems/restaurent-add-nonvegitems.component';
import { AddTocartComponent } from './components/add-tocart/add-tocart.component';
import { FilterPipe } from './filter.pipe';
import { AddmenuComponent } from './compoenents/addmenu/addmenu.component';
import { CarasoulComponent } from './testing/carasoul/carasoul.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeCompomentComponent,
    LoginComponent,
    AddItemComponent,
    UpdateItemComponent,
    UpdateItem1Component,
    DeleteItemComponent,
    AllItemlistComponent,
    CustomerRegistrationComponent,
    GetCustomersComponent,
    CustomerUIComponent,
    RestaurentHomeComponent,
    RestaurentChoosetypeComponent,
    RestaurentNonvegitemsComponent,
    RestaurentVegitemsComponent,
    RestaurentSoupsComponent,
    RestaurentIcecreamsComponent,
    RestaurentTiffinsComponent,
    RestaurentMilkshakesComponent,
    RestaurentAddMilkshakesComponent,
    RestaurentAddTiffinsComponent,
    RestaurentAddIcecreamsComponent,
    RestaurentAddSoupsComponent,
    RestaurentAddVegitemsComponent,
    RestaurentAddNonvegitemsComponent,
    AddTocartComponent,
    FilterPipe,
    AddmenuComponent,
    CarasoulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    FormsModule,
    

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
