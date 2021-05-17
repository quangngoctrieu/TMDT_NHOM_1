import { AccountService } from './../account.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.css']
})
export class InforComponent implements OnInit {

  constructor(
    private location: Location,
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  phoneNumber: any;
  accounts: Account[] = [];
  statusMessage: boolean = true;
  ngOnInit(): void {
    this.phoneNumber = this.accountService.phoneNumber;
  }
  goBack(): void {
    this.location.back();
  }
  closeMessage(): void {
    this.statusMessage = true;
  }

  //   registerAccount(pass: string, nameAccount: string, addressAccount: string): void{
  //     const newAccount: Account = new Account();
  //     newAccount.pass = pass;
  //     newAccount.name = nameAccount;
  //     newAccount.address = addressAccount;
  //     newAccount.phonenumber = this.phoneNumber;
  //     this.accountService.addAccount(newAccount).subscribe(insertedAccount => {
  //       this.accounts.push(insertedAccount);
  //   }
  // }
  //check pass
  checkPass(pass: string, confirm: string): void {
    if (pass != confirm) {
      this.statusMessage = false;
    } else {
      this.statusMessage = true;
    }
  }


  registerAccount(pass: string, confirm: string, nameAccount: string, addressAccount: string): void {
    if (!this.phoneNumber) {
      alert('chua co sdt');
    }
    if (!pass || !confirm || !nameAccount || !addressAccount) {
      this.statusMessage = false;
    } else {
      const newAccount: Account = new Account();
      newAccount.pass = pass;
      newAccount.name = nameAccount;
      newAccount.address = addressAccount;
      newAccount.phonenumber = this.phoneNumber;
      this.accountService.addAccount(newAccount).subscribe(insertedAccount => {
        this.accounts.push(insertedAccount);
        if (this.accounts)
        console.log(this.accounts[0].name);
          this.router.navigate(['/home']);
      });
    }
  }

}
