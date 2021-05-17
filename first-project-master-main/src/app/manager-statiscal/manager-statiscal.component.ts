import { Product } from './../models/product';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-statiscal',
  templateUrl: './manager-statiscal.component.html',
  styleUrls: ['./manager-statiscal.component.css']
})
export class ManagerStatiscalComponent implements OnInit {

  //danh sách sản phẩm
  products: Product[]=[];
  //sản phẩm chi tiết
  detailProduct!: Product;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProductFromService();
  }

  getProductFromService(): void {
    //this.products=this.productService.getProduct();
    this.productService.getProduct().subscribe(
      (updateProducts) => {
        this.products = updateProducts;
      }
    );
  }

  //sắp xếp
  //sắp xếp
  key: string = 'id';
  status: boolean = false;
  sort(key: string) {
    this.key = key;
    this.status = !this.status;
  }

   //pagination
   p: number = 1;
   //kí tự search
   name: any;

}
