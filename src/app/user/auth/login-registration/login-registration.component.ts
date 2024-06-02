import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.scss']
})
export class LoginRegistrationComponent {

  userRegistrationForm!: FormGroup; // Declare the form group variable
  formNumber:any = ''
  login_part:boolean = true

  constructor(private formBuilder: FormBuilder, private _router:Router) {
    this.createForm(); // Call the method to create the form
  }
  ngOnInit() {
    if(localStorage.getItem('formNumber')){
      let num:any = localStorage.getItem('formNumber')
      if(num > 4){
        num = 1
      }
      this.formNumber = num
    }else{
      this.formNumber = '1'
    }
     AOS.init();
  }

  createForm() {
    this.userRegistrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pinCode: ['', Validators.required],
      address: ['', Validators.required],
      landmark: ['', Validators.required],
      emergencyContactName: ['', Validators.required],
      emergencyContactNumber: ['', Validators.required],
    });
  }

  
  onNext(){
    if(this.formNumber == '1'){
      this.formNumber = '2'
      localStorage.setItem('formNumber','2')
    }else if(this.formNumber == '2'){
      this.formNumber = '3'
      localStorage.setItem('formNumber','3')
    }else if(this.formNumber == '3'){
      this.formNumber = '4'
      localStorage.setItem('formNumber','4')
    }
  }

  goBack(){
    if(this.formNumber == '4'){
      this.formNumber = '3'
      localStorage.setItem('formNumber','3')
    }else if(this.formNumber == '3'){
      this.formNumber = '2'
      localStorage.setItem('formNumber','2')
    }else if(this.formNumber == '2'){
      this.formNumber = '1'
      localStorage.setItem('formNumber','1')
    }
  }

  registerUser() {
    console.log(this.userRegistrationForm.value);
    alert("hey")
    this.login_part = false
    
  }

  loginUserBtn(){
    this._router.navigate(['/dashboard'])
  }
  
  login(){
    this.login_part = !this.login_part
  }

}
