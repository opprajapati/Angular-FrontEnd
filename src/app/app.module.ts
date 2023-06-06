import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    AdminComponent,
    HeaderComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    UserModule,
    ReactiveFormsModule,
    FormsModule
    
   
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('app module load')
  }
 }
