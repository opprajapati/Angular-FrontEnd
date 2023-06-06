import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(  private router:Router) { }

  ngOnInit(): void {
  }
  goToAbout(){
    this.router.navigate(['dashboard/about'])
  }

}
