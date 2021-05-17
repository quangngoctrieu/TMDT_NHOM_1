import { Account } from './../models/account';
import { AccountService } from './../account.service';
import { ItemCheckOut } from './../models/itemcheckout';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manager-history-oder',
  templateUrl: './manager-history-oder.component.html',
  styleUrls: ['./manager-history-oder.component.css']
})
export class ManagerHistoryOderComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private modalService: NgbModal,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.getAllItemCheckOuted();
  }
  //danh sách item đã giao
  itemCheckOuted: ItemCheckOut[] = [];
  //lấy danh sách giao hàng
  getAllItemCheckOuted(): void {
    this.cartService.getItemCheckOuted().subscribe(
      items => this.itemCheckOuted = items
    )
  }

  //chi tiết mua hàng
  itemInfor!: ItemCheckOut;
  //người mua hàng
  userOder: Account[] = [];
  //details
  openVerticallyCentered(content: any, itemIfor: ItemCheckOut) {
    this.itemInfor = itemIfor;
    //lấy chi tiết người mua
    this.accountService.searchAccountFromID(itemIfor.iduser).subscribe(
      (userOder) => {
        this.userOder = userOder;
      }
    )
    //mở chi tiết
    this.modalService.open(content, { centered: true });
  }

}
