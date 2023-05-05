import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterModel} from './register.component.model';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  formValue!: FormGroup;
  registerModelObj: RegisterModel = new RegisterModel();
  constructor(private formbuilder: FormBuilder,private api:ApiService,private router:Router) { }
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      email: [''],
      first_name: [''],
      last_name: [''],
      phone: [''],
      password: [''],
        retype_password:string='',
    });
  }
  

  postUserDetails(){
    this.registerModelObj.email=this.formValue.value.email;
    this.registerModelObj.first_name=this.formValue.value.first_name;
    this.registerModelObj.last_name=this.formValue.value.last_name;
    this.registerModelObj.phone=this.formValue.value.phone;
    this.registerModelObj.password=this.formValue.value.password;

    this.api.postuser(this.registerModelObj).subscribe(
      (res: any) => {
        console.log(res);
        alert('User Data sent successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.router.navigate(['login']);
        //this.getAllEmployee();
      },
      (err: any) => {
        alert('Something went wrong');
      }
    );
  }


}
