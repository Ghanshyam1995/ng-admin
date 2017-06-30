import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from "app/pages/login/login.component";
import { RegisterComponent } from "app/pages/register/register.component";
import { SharedModule } from "app/Shared/Shared.module";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],

  declarations: [LoginComponent,RegisterComponent]
})
export class LoginModule { }
