import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './user-table/user-table.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserTableComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  
   
   
    
  ]
})
export class UserModule {
  constructor(){
    console.log('user module load')
  }
 }
