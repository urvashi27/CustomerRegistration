import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PurchaseComponent } from './purchase/purchase.component';
const routes: Routes = [{
  
    path:'',
    component:RegistrationFormComponent
  
},
{
  path:'purchase',
  component:PurchaseComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
