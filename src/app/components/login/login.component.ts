import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
aFormGroup: any;
siteKey: String="6Lev57cpAAAAAApuK4-Aa0FAGyAylZAHjSIrAHmm";
ngsubmit: any;
arr1:any;
username1:any;
password1:any;
email1:any;
  constructor(private __formsgroup:FormBuilder,
               private __restaurent_service:RestautarentService,
               private __route:Router)

  {
    this.aFormGroup=this.__formsgroup.group({
      username:['',Validators.required],
      Email:['',Validators.required],
      password:['',Validators.required],
      recaptcha:['',Validators.required]
    })

  }
 

  logsubmit()
  {
    
        this.__restaurent_service.get_management().subscribe((data)=>{
                  console.log(data);
                  this.arr1=data;
              
            
      const usernamecontrol=this.aFormGroup.get('username');
      const emailcontrol=this.aFormGroup.get('Email');
      const passwordcontrol=this.aFormGroup.get('password');
        if(this.arr1&&usernamecontrol&&emailcontrol&&passwordcontrol)
        {
          const username=usernamecontrol.value;
          const password=passwordcontrol.value;
          const email=emailcontrol.value;
          console.log(username,password,email)
        
        if(this.arr1.find(x=>x.user_name==username && x.password==password && x.email_id==email))
             this.__route.navigate(['/home'])
        else
             this.__route.navigate(['/login'])
          
         }
    })

}
}
