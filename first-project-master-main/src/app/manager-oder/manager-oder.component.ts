import { Router } from '@angular/router';
import { AccountService } from './../account.service';
import { Account } from './../models/account';
import { ItemCheckOut } from './../models/itemcheckout';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-manager-oder',
  templateUrl: './manager-oder.component.html',
  styleUrls: ['./manager-oder.component.css']
})
export class ManagerOderComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private modalService: NgbModal,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getItemsCheckOut();
  }
  //name search
  nameseach: any;
  //global item to show infor
  itemifor!: ItemCheckOut;
  //global users oder
  accountOder: Account[] = [];
  //global user oder
  name: string = '';
  address: string = '';
  phonenumber: string = '';

  //modal
  openVerticallyCentered(content: any, itemoder: ItemCheckOut) {
    this.itemifor = itemoder;
    this.accountService.searchAccountFromID(itemoder.iduser).subscribe(
      (userOder) => {
        this.accountOder = userOder;
        this.name = this.accountOder[0].name;
        this.address = this.accountOder[0].address;
        this.phonenumber = this.accountOder[0].phonenumber;
      }
    );
    console.log(this.accountOder);
    //mở chi tiết
    this.modalService.open(content, { centered: true });
  }



  //item need check out
  itemsCheckOut: ItemCheckOut[] = [];
  getItemsCheckOut(): void {
    this.cartService.getItemNeedOder().subscribe(
      (itemOder) => {
        this.itemsCheckOut = itemOder;
        console.log(this.itemsCheckOut);
      }
    );
  }


  delivery(idOder: number): void {
    console.log(idOder);
    this.cartService.deliveryOder(this.itemifor).subscribe();
    //reload trang
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

  //in hóa đơn
  public openPDF(namefile: string): void {
    let DATA: any;
    
    DATA = document.getElementById('customerInfo');

    html2canvas(DATA).then(canvas => {

      //chỉnh size file pdf, muốn đẹp thì sửa cái này nè
      let fileWidth = 100;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save(namefile+'.pdf');
    });
  }


}
