// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { RestautarentService } from 'src/app/services/restautarent.service';

// @Component({
//   selector: 'app-add-tocart',
//   templateUrl: './add-tocart.component.html',
//   styleUrls: ['./add-tocart.component.css']
// })
// export class AddTocartComponent {

//     arr1:any;
//     Quantity:any;
//     totalAmoount:0;
//    constructor(private __restaurentService:RestautarentService,
//       private __router:Router
//    )
//    {
//         this.__restaurentService.getCartDetails().subscribe((data)=>{
//           console.log(data);
          
//           this.arr1=data;
//           this.totalAmoount=0;
//             for(let data of this.arr1)
//               {
//                 console.log(data.paybleamount)
//               this.totalAmoount+=(data.paybleamount);
//               console.log(this.totalAmoount)
//               }
              
//               console.log(this.totalAmoount);
              

//         });
//       }
//         increaseQuantity(id:any,data:any)
//         {

//           console.log("hello");
//             console.log(id);
           
//                 this.Quantity= data++;
//                 this.updateQuantityInBackend(id,data);
          
//         }
//         decreaseQuantity(id:any,data:any)
//         {
//           console.log("gfgf");
           
             
//           this.Quantity=data--;
//              console.log(this.Quantity);
//           this.updateQuantityInBackend(id,data);
            
              
            
//         }
//         updateQuantityInBackend(id: any, Quantity: any) {
//           console.log("jkkk");
//           console.log(Quantity);
//           this.__restaurentService.updateQuantity(JSON.stringify(id),Quantity).subscribe((data)=> {
//             console.log(data);
//             console.log('Quantity updated successfully in the backend');
//           });
         
//         }
//         DeleteCartItem(id:any)
//         {
//           this.__restaurentService.deletCartitem(id).subscribe((data)=>{
//              console.log(data);
//             this. __router.navigate(['/addToCart'])
            

//           })

//           }
//           pay()
//           {

//           }
// }
        
        
   
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-add-tocart',
  templateUrl: './add-tocart.component.html',
  styleUrls: ['./add-tocart.component.css']
})
export class AddTocartComponent {

    arr1: any;
    totalAmount = 0;

    constructor(
        private __restaurentService: RestautarentService,
        private __router: Router
    ) {
        this.refreshCartDetails(); // Fetch initial cart details
    }

    increaseQuantity(id: any) {
        this.updateQuantityInBackend(id, 1); // Increase quantity by 1
    }

    decreaseQuantity(id: any) {
        this.updateQuantityInBackend(id, -1); // Decrease quantity by 1
    }

    updateQuantityInBackend(id: any, change: number) {
    
        const itemToUpdate = this.arr1.find(item => item.id === id);
        if (itemToUpdate) {
            itemToUpdate.quantity += change; // Update quantity in the frontend
            this.__restaurentService.updateQuantity(id, itemToUpdate.quantity).subscribe((data) => {
                console.log(data);
                console.log('Quantity updated successfully in the backend');
                //this.calculateTotalAmount(); // Recalculate total amount after updating quantity
                this.refreshCartDetails();
            });
        }
    }

    DeleteCartItem(id: any) {
        this.refreshCartDetails();
        this.__restaurentService.deletCartitem(id).subscribe((data) => {
            console.log(data);
            this.refreshCartDetails();
            this.__router.navigate(['/addToCart']);
           
           
        });
    }

    refreshCartDetails() {
        this.__restaurentService.getCartDetails().subscribe((data) => {
            console.log(data);
            this.arr1 = data as any[];
            this.calculateTotalAmount(); // Recalculate total amount after refreshing cart details
        });
    }

    calculateTotalAmount() {
        this.totalAmount = this.arr1.reduce((total, item) => total + item.paybleamount, 0);
    }

    // pay() {
      
    // }
    pay()
    {
        console.log("hello");
    }
}
