import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {
agroup: any;
  constructor(private __restaurentService:RestautarentService,
              private __formbuilder:FormBuilder,
               private __route:Router)
  {
    this.agroup=this.__formbuilder.group({
      customer_first_name:['',Validators.required],
      customer_last_name:['',Validators.required],
      mobile_no:['',Validators.required],
      email_id:['',Validators.required],
      customer_location:['',Validators.required],
      customer_password:['',Validators.required],
      customer_cpassword:['',Validators.required],
    });

  }
  formsubmit()
  {
   
     
 
    console.log(this.agroup)
    this.__restaurentService.post_customer(this.agroup.value).subscribe((data)=>{
         console.log(data);
         this.__route.navigate(['/get_customer']);

    })
  }

}
