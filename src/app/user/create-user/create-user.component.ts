import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from'@angular/forms'



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
    formdata:string='';
    isvalid:boolean=false;
    
  constructor() { } 
  regForm =new FormGroup(
    {
     firstName:new FormControl('',[
      Validators.required,
      Validators.minLength(5)
     ]),
     lastName:new FormControl('',[
      Validators.required,
      Validators.minLength(5)
     ]),
     gender:new FormControl('',[
      Validators.required
     ]),
     dob:new FormControl('',[
      Validators.required,
     ]),
     emailid:new FormControl('',[
      Validators.required,
      Validators.email
     ]),
     mobileno:new FormControl('',[
      Validators.required,
      Validators.minLength(10)
     ]),
     pass:new FormControl('',[
      Validators.required,
      Validators.minLength(6)
     ]),
     confirmpass:new FormControl('',[
      Validators.required,
      Validators.maxLength(6)
     ]),
    
    }
   )

  ngOnInit(): void { }
  onCreate()
  {
    this.formdata=JSON.stringify(this.regForm.value);
    console.log(this.formdata);
    
  }



}
