import { Router } from '@angular/router';
import { Account } from './../models/account';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manager-account',
  templateUrl: './manager-account.component.html',
  styleUrls: ['./manager-account.component.css']
})
export class ManagerAccountComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllAccount();
  }

  //tên tìm kiếm
  name: any;
  accounts: Account[] = [];
  getAllAccount(): void {
    this.accountService.getAllAccount().subscribe(
      allAcout => (
        this.accounts = allAcout
      )
    )
  }

  //infor account
  inforAccount!: Account;
  //modal
  openVerticallyCentered(content: any, account: Account) {
    this.inforAccount = account;
    //mở chi tiết
    this.modalService.open(content, { centered: true });
  }
  openVerticallyCentered2(content: any) {
    //để rỗng các ô input
    this.inforAccount = new Account;
    //mở chi tiết
    this.modalService.open(content, { centered: true });
  }

  //xác nhận xóa
  openScrollableContent(longContent: any, accountDelete: Account) {
    this.inforAccount = accountDelete;
    this.modalService.open(longContent, { scrollable: true });
  }

  //change infor
  changeInfor(phonenumber: string, pass: string, nameAccount: string, addressAccount: string): boolean {
    if (!this.checkPhoneNumber(phonenumber)) {
      alert('Số điện thoại bị sai');
      return false;
    }
    if (!phonenumber || !pass || !confirm || !nameAccount || !addressAccount) {
      alert('vui lòng điền đủ thông tin!');
      return false;
    } else {
      if (!this.inforAccount.id) {
        const newAccount: Account = new Account();
        newAccount.pass = pass;
        newAccount.name = nameAccount;
        newAccount.address = addressAccount;
        newAccount.phonenumber = phonenumber;
        this.accountService.addAccount(newAccount).subscribe(
          newInfor => this.inforAccount = newInfor
        )
      } else {
        const newAccount: Account = new Account();
        newAccount.id = this.inforAccount.id;
        newAccount.pass = pass;
        newAccount.name = nameAccount;
        newAccount.address = addressAccount;
        newAccount.phonenumber = phonenumber;
        this.accountService.changeAccount(newAccount).subscribe(
          newInfor => this.inforAccount = newInfor
        )
        //reload trang
      }
    }
    this.reloadPage();
    return true;
  }

  //kiểm tra sdt
  checkPhoneNumber(phone: String): boolean {
    if (phone.length < 10 || phone.length > 10 || (Number.isNaN(Number(phone)))) {
      alert(phone.length);
      return false;
    }
    return true;
  }

  //xoas tài khoản
  deleteAccount(): void {
    this.accountService.deleteAcount(this.inforAccount).subscribe();
    this.reloadPage();
  }

  //reload trang
  reloadPage(): void {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  //sắp xếp
  key: string = 'id';
  status: boolean = false;
  sort(key: string) {
    this.key = key;
    this.status = !this.status;
  }

}
