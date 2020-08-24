import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { users } from '../users';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
registrationform:FormGroup;
loading:false;
fileToUpload: any;
  imageUrl: any;
  user:users;

  constructor(private fb:FormBuilder,private router:Router,private userservice:UserServiceService) { }
  public selectOptions = [
    "Individual",
    "Partnership",
    "LLP",
    "Pvt Ltd.",
    "ltd"
  ]
  days=[
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"


  ]
  time=[
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM"


  ]
  

  ngOnInit() {
    this.registrationform=this.fb.group({
      name:['',Validators.required],
      customername:['',Validators.required],
      entity:['',Validators.required],
      address1:['',Validators.required],
      address2:['',Validators.required],
      address3:['',Validators.required],
      landmark:['',Validators.required],
      latitude:['',Validators.required],
      longtitude:['',Validators.required],
      gst:['',Validators.required],
      pan:['',Validators.required],
      billing:['',Validators.required],
      bank:['',Validators.required],
      branch:['',Validators.required],
      accountno:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      accounttype:['',Validators.required],
      ifsc:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      days:['',Validators.required],
      time:['',Validators.required],
      terms:['',Validators.required],
      file:['',Validators.required]

    })
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  submit()
  {
   if(this.registrationform.invalid)
   {
     alert('Please enter all Fields');
     return;
   }
   else{
    this.userservice.user=this.registrationform.value;
    console.log(this.registrationform.value);
  
    this.router.navigate(['/purchase']);

   
     
   
   

    
  }
}

}
