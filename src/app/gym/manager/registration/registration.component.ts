import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  gymManagerForm!: FormGroup; // Declare the form group variable
  formNumber:any = ''
  joinAsManager:boolean = false

  constructor(private formBuilder: FormBuilder, private _router:Router) {
    this.createForm(); // Call the method to create the form
  }
  ngOnInit() {
    let num = localStorage.getItem('formNumber')
    if(localStorage.getItem('formNumber')){
      this.formNumber = num
    }else{
      this.formNumber = '1'
    }
     AOS.init();
  }

  createForm() {
    this.gymManagerForm = this.formBuilder.group({
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

  onSubmit() {
    //   const formData: GymManager = this.gymManagerForm.value;
    //   console.log(formData); // You can send this data to your backend or perform any other action
    // alert("Registration successful")
    console.log(this.gymManagerForm.value);
    alert("hey")
    this._router.navigate(['gym/gym-registration'])
    
  }

}

