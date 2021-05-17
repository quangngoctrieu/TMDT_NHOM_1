import { AccountService } from './../account.service';
import { Account } from './../models/account';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: Account[] = [];
  idAccount = '';
  constructor(private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  message: string = '';
  valuePhone: string = '';
  registerPhone(idPhone: string): void {
    if (Number.isNaN(Number(idPhone))) {
      alert("Please input your phone number!");
    }
    else {
      if (idPhone.length != 10) {
        alert("The phone number has 10 digits. Please input again!")
      }
      else {
        this.idAccount = idPhone;
        this.accountService.getAllAccount().subscribe((account: any) => {

          var s = 0;
          for (var i = 0; i <= account.length - 1; i++) {
            if (idPhone == account[i].phonenumber) {
              alert("This phone number has existed");
              break;
            }
            else {
              s = s + 1;
            }
          }

          if (s == account.length) {
            this.router.navigate(['/account/infor']);
            this.accountService.phoneNumber = idPhone;
          }
          else {
            alert("This phone number has existed");
          }
        })
      }
    }
  }




  //add account
  // addAccount(id: string, phonenumber: string, pass: string, name: string, address: string): void {
  //   const newAccount: Account = new Account();
  //   newAccount.id = Number(id);
  //   newAccount.pass = pass;
  //   newAccount.name = name;
  //   newAccount.address = address;
  //   newAccount.phonenumber = phonenumber;
  //   this.accountService.addAccount(newAccount).subscribe(insertedAccount => {
  //     this.accounts.push(insertedAccount);
  //   });
  // }



}
