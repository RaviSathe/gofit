import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ngOnInit(): void {
    this.newLeads
  }
  
  newLeads = [
    {img:'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', name:'Albert Wil', contact:'98989898', id:'1'},
    {img:'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', name:'Albert Wil', contact:'98989898', id:'2'},
    {img:'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', name:'Albert Wil', contact:'98989898', id:'3'},
    {img:'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', name:'Albert Wil', contact:'98989898', id:'4'},
    {img:'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', name:'Albert Wil', contact:'98989898', id:'5'},
  ]

}
