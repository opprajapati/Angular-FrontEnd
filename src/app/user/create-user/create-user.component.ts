import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder} from'@angular/forms'



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
    
   regForm!:FormGroup;
  constructor( private fb:FormBuilder) { } 
  regFormData(){
    this.regForm =this.fb.group({
    
     firstName:['',[
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('[a-zA-Z]+')
    ]
     ],
     lastName:['',[
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('[a-zA-Z]+')
    ]
     ],
     gender:['',[
      Validators.required]
     ],
     dob:['',[
      Validators.required,
     ]],
     emailId:['',[
      Validators.required,
      Validators.email]
     ],
     mobileno:['',[
      Validators.required,
      Validators.minLength(10)]
     ],
     pass:['',[
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$!%*@?&^_-]).{12,}/)
    ]
     ],
     confirmpass:['',[
      Validators.required,
      Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$!%*@?&^_-]).{12,}/)]
     ],
    
    }
    )}

  ngOnInit(): void {
    this.regFormData()
   }
  onCreate(){
    let formData={
      ...this.regForm.value
    }
    console.log(formData);

  }
  
    
  }




