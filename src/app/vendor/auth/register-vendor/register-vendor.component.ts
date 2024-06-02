import { Component } from '@angular/core';

@Component({
  selector: 'app-register-vendor',
  templateUrl: './register-vendor.component.html',
  styleUrls: ['./register-vendor.component.scss']
})
export class RegisterVendorComponent {

  formNumber:string = ''

  ngOnInit(){
    this.formNumber = '1'
  }

  onNext(){
    if(this.formNumber == '1'){
      this.formNumber = '2'
    }else if(this.formNumber == '2'){
      this.formNumber = '3'
    }
  }

  goBack(){
    if(this.formNumber == '3'){
      this.formNumber = '2'
    }else if(this.formNumber == '2'){
      this.formNumber = '1'
    }
  }

}
