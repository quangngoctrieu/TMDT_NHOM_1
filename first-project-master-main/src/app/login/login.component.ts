import { AppComponent } from './../app.component';
import { Account } from './../models/account';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  public userLogined: Account | undefined;
  allAccount: Account[] = [];
  checkValue(phone: string, pass: string): boolean {
    if (Number.isNaN(Number(phone))) {
      return false;
    }
    return true;
  }

  //reload page
  reloadPage(): void {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  login(phoneNumber: string, password: string): void {

    //login admin
    var accccc!: any;
    this.accountService.getAccountAdmin().subscribe(
      acdm => {
        accccc = acdm;
        if (phoneNumber === accccc.name && password === accccc.pass)
          this.router.navigate(['/manengadmin']);
      }
    )

    if (this.checkValue(phoneNumber, password)) {
      this.accountService.loginAccount(phoneNumber, password).subscribe((account) => {
        if (account.length != 0) {
          localStorage.setItem('SDT', JSON.stringify(phoneNumber));
          this.getinfor(phoneNumber);
          this.router.navigate(['']);
        }
        else {
          console.log('false');
          alert('sai thông tin đăng nhập');
        }
      })
    }
  }

  name: string = '';
  getinfor(idPhone: string): void {
    this.accountService.searchPhoneNumber(idPhone).subscribe((accs: any) => {
      localStorage.setItem('account', JSON.stringify(accs));
      localStorage.setItem('iduser', JSON.stringify(accs.id));
      let account: any = localStorage.getItem('account');
      account = JSON.parse(String(account));
      console.log(account.name);
    })
  }

  //logout
  nameaccount = "Login";
  logoutaccout(): void {
    localStorage.removeItem('account');
    localStorage.removeItem('SDT');
    localStorage.removeItem('iduser');
    window.location.reload();
  }

}
