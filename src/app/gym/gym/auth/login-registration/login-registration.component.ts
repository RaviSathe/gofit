import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.scss']
})
export class LoginRegistrationComponent implements OnInit {

  loginForm:boolean = true
  registrationForm!: FormGroup;
  formNumber:any = '1'

  constructor(private formBuilder: FormBuilder, private _router:Router) { }

  ngOnInit(): void {
    AOS.init();

    this.registrationForm = this.formBuilder.group({
      gymName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pinCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      typeOfGym: ['', Validators.required],
      gymFacilities: new FormArray([]),
      location: ['', Validators.required],
      website: [''],
      businessLicenseNumber:['',Validators.required], 
      managerUniqueNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      logo: [''], // For file upload, not using validators here
      coverPhoto: [''] // For file upload, not using validators here
    });
  }

  public checks: Array<any> = [
    {description: 'Yoga Studio', value: 'yoga',id:'btncheck1'},
    {description: "CrossFit", value: 'cross-fit',id:'btncheck2'},
    {description: "Kickboxing", value: 'kickboxing',id:'btncheck3'},
    {description: "Weightlifting", value: 'weightlifting',id:'btncheck4'},
    {description: "Zumba", value: 'Zumba',id:'btncheck5'},
    {description: "Rock Climbing", value: 'rock-climbing',id:'btncheck6'},
    {description: "Gymnastics", value: 'gymnastics',id:'btncheck7'},
  ];

  onCheckChange(event:any) {
    const formArray: FormArray = this.registrationForm.get('gymFacilities') as FormArray;
  
    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;
  
      formArray.controls.forEach((ctrl: any) => {
        if(ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
  }

  onLogin(){
    this.loginForm = false
  }

  onRegister(){
    this.loginForm = true
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
    }else if(this.formNumber == '4'){
      this.formNumber = '5'
      localStorage.setItem('formNumber','5')
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

  register() {
    console.log(this.registrationForm.value);
    this._router.navigate(['gym/home'])
  }

}