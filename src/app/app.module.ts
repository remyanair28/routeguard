import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanactivateGuard } from './services/canactivate.guard';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AuthguardService } from './services/authservice ';
import { ProductService } from './services/product.service';
import { LoginComponent } from './login/login.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    EmployeelistComponent,
    EmployeeviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CanactivateGuard, AuthguardService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
