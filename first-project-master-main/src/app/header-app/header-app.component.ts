import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.css']
})
export class HeaderAppComponent implements OnInit {

  constructor() { }

  nameaccount = 'Login';
  ngOnInit(): void {
    this.getNameAccount();
  }
  getNameAccount() {
    if (localStorage.getItem('account') != null) {
      let account: any = localStorage.getItem('account');
      account = JSON.parse(String(account));
      this.nameaccount = account.name;
    }

  }

}
