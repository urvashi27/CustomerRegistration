import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { UserServiceService} from '../user-service.service';
import { users } from '../users';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
registrationform:FormGroup;
products:any;
values1 = ["1", "2"];
allProducts:any;

  constructor(private fb:FormBuilder,private service:UserServiceService) {


   }

  ngOnInit()
   {
     
    this.registrationform=this.fb.group({
      customername:['',Validators.required],
      code:['',Validators.required],
      category:['',Validators.required]
  });

}
categories=[

  "Category A",
  "Category B"
]

 
  firstDropDownChanged(value: any) {
    console.log(value)

    if (value == "1") {
      this.allProducts = [ {
        category:"A",
        productname:"Mobile",
        brandName:"OnePlus",
          UOM:"kg",
          MRP:"50000",
          Discount:"",
          OurPrice:"50000",
          Quantity:"1",
          Totalprice:"50000"
        },
        {
          category:"A",
          productname:"mobile",
          brandName:"Samsung",
            UOM:"kg",
            MRP:"5000",
            Discount:"",
            OurPrice:"123",
            Quantity:"3",
            Totalprice:"600000"
        },
        {
        category:"A",
        productname:"mobile",
        brandName:"Motorola",
          UOM:"kg",
          MRP:"6000",
          Discount:"",
          OurPrice:"123",
          Quantity:"3",
          Totalprice:"6000"
      },
      {
      category:"A",
      productname:"mobile",
      brandName:"Redmi",
        UOM:"kg",
        MRP:"5000",
        Discount:"",
        OurPrice:"123",
        Quantity:"3",
        Totalprice:"6000"
      }
      ]
      }
    
    else if (value == "2") {
      this.allProducts = [{ category:"B",
      productname:"Headphones",
      brandName:"Redmi",
        UOM:"",
        MRP:"6000",
        Discount:"",
        
        OurPrice:"123",
        Quantity:"3",
        Totalprice:"6000"
    },
    {
       category:"B",
    productname:"Headphones",
    brandName:"boat",
      UOM:"kg",
      MRP:"5000",
      Discount:"",
      
      OurPrice:"123",
      Quantity:"3",
      Totalprice:"6000"
  },
  { category:"B",
      productname:"Headphones",
      brandName:"samsung",
        UOM:"kg",
        MRP:"5000",
        Discount:"",
        
        OurPrice:"123",
        Quantity:"3",
        Totalprice:"6000"
    },
    { category:"B",
      productname:"Headphones",
      brandName:"jbl",
        UOM:"kg",
        MRP:"5000",
        Discount:"",
        
        OurPrice:"123",
        Quantity:"3",
        Totalprice:"6000"
    }
]
    
  }
}
  
}

