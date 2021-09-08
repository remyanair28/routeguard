import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './services/canactivate.guard';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component:LoginComponent},
  { path: 'employees',   component: EmployeelistComponent, canActivate : [CanactivateGuard], 
      //children: [{path: 'view/:id', component: EmployeeviewComponent}]
  },
  {path: 'view/:id', component: EmployeeviewComponent},
  { path: 'product', component: ProductComponent, canActivate : [CanactivateGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
