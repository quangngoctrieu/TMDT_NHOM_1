import { ItemCheckOut } from './../models/itemcheckout';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getHistory();
    
  }

  itemCheckOut: ItemCheckOut[] = [];
  getHistory(): void {
    let iduser:any=(localStorage.getItem('iduser'));
    iduser=JSON.parse(String(iduser)); 
    this.cartService.getHistory(iduser).subscribe(
      (itemCheckedOut) => {
        this.itemCheckOut = itemCheckedOut;
        console.log(this.itemCheckOut);
        
      }
    );
    
  }

}
