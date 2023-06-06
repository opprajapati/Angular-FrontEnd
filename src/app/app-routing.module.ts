import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './dashboard/about/about.component';

const routes: Routes = [

  {path:"dashboard",component:DashComponent ,children:[
    {path:'' ,component:DashComponent ,pathMatch:'full'},
  {
    path:'analytics',component:AnalyticsComponent
  },
  ]},
  {path:'user', component:CreateUserComponent,children:[
    {path:'usertable',component:UserTableComponent},
    {
      path:'createuser', component:CreateUserComponent
    }
  ]},
  {
   path:'chart',component:ChartComponent 
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'admin',component:AdminComponent
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
