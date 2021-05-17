import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.css']
})
export class ManagerProductComponent implements OnInit {

  //danh sách sản phẩm
  products: Product[]=[];
  //sản phẩm chi tiết
  detailProduct!: Product;
  constructor(
    private productService: ProductService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductFromService();
  }

  productInfor!:Product;
  //open info
  productdelete!: Product;
  openScrollableContent(longContent: any, product: Product) {
    this.productInfor=product;
    this.productdelete=product;
    this.modalService.open(longContent, { scrollable: true });
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
  

   //xóa sản phẩm
  //  openScrollableContent(longContent: any, productdelete: Product) {
  //   this.deleteProduct(productdelete);
  //   this.modalService.open(longContent, { scrollable: true });
  // }
  deleteProduct(): void{
    this.productService.deleteProduct(this.productneeddelete.id).subscribe(
      productdelete=>{
        console.log('delete product');
      }
    )
    let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }



  productneeddelete!:Product;
  openSm(content: any,pd: Product) {
    this.productneeddelete=pd;
    this.modalService.open(content, { size: 'sm' });
  }
}
