import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashComponent } from './dash/dash.component';
import { AboutComponent } from './about/about.component';
  export const routes: Routes = [
  {path:'' ,component:DashComponent ,pathMatch:'full'},
  {
    path:'analytics',component:AnalyticsComponent
  },
  {
    path:'about',component:AboutComponent
  }

];

@NgModule({
  declarations: [
    DashComponent,
    AnalyticsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule

   
   
  ]
})
export class DashboardModule {
  constructor(){
    console.log(' dash module load')
  }
 }
