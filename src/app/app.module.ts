import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';

import "hammerjs";
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {Routes,RouterModule} from "@angular/router";
import { SharedModule } from "app/Shared/Shared.module";
const routes: Routes = [
 {path :'',redirectTo:'home',pathMatch:'full'},
 {path :'home',component:DashboardComponent},

 {path:'account',loadChildren:'./pages/login/login.module#LoginModule'}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    ChartsModule,
    BrowserAnimationsModule
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
