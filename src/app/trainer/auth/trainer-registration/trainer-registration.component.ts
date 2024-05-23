import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-trainer-registration',
  templateUrl: './trainer-registration.component.html',
  styleUrls: ['./trainer-registration.component.scss']
})
export class TrainerRegistrationComponent implements OnInit {
  loginForm:boolean = true
  trainerForm!: FormGroup;
  formNumber:any = '1'
  trainerTypes: string[] = ['Gym Trainer', 'Zumba Trainer', 'Boxing Trainer', 'Yoga Instructor', 'Pilates Instructor', 'CrossFit Trainer', 'Swimming Coach', 'Cycling Instructor'];

  constructor(private fb: FormBuilder,private _router:Router) { }

  ngOnInit(): void {

    AOS.init();

    this.trainerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: [''],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      trainerType: ['', Validators.required],
      certifications: [''],
      yearsOfExperience: [''],
      specializations: [''],
      availability: [''],
      preferredLocations: [''],
      pricing: [''],
      additionalSkills: [''],
      references: [''],
      photo: ['']
    });
  }

  onLogin(){
    this.loginForm = false
  }

  onRegister(){
    this.loginForm = true
  }
  // specializationList=['gym','swimmimg']

  public specializationList: Array<any> = [
    {description: 'Yoga Studio', value: 'yoga',id:'btncheck1'},
    {description: "CrossFit", value: 'cross-fit',id:'btncheck2'},
    {description: "Kickboxing", value: 'kickboxing',id:'btncheck3'},
    {description: "Weightlifting", value: 'weightlifting',id:'btncheck4'},
    {description: "Zumba", value: 'Zumba',id:'btncheck5'},
    {description: "Rock Climbing", value: 'rock-climbing',id:'btncheck6'},
    {description: "Gymnastics", value: 'gymnastics',id:'btncheck7'},
  ];

  onCheckChange(event:any) {
    const formArray: FormArray = this.trainerForm.get('specializations') as FormArray;
        if(event.target.checked){
      formArray.push(new FormControl(event.target.value));
    }
    else{
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if(ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
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

  registerTrainer() {
    console.log(this.trainerForm.value);
    this._router.navigate(['./dashboard'])
    // You can submit the form data to your backend or perform other actions here
  }
}
