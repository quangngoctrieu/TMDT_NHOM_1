import { Router } from '@angular/router';
import { CartService } from './../cart.service';
import { Item } from './../models/item';
import { ProductService } from './../product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  name: any;
  item: Item | undefined;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    // this.reloadPage();
    this.getProductFromService();
  }
  check(s: string): void {
    alert(s);
  }
  // (eachProducts.id,eachProducts.name, eachProducts.price,eachProducts.color[0])
  addToCart(id: number, name: string, price: number): void {
    this.item = new Item(id, name, price, "S", 'white', 1, false);
    this.cartService.addItem(this.item);
  }
  getProductFromService(): void {
    //this.products=this.productService.getProduct();
    this.productService.getProduct().subscribe(
      (updateProducts) => {
        this.products = updateProducts;
      }
    );
  }
  //sort
  key: string = '';
  status: boolean = false;
  sort(key: string) {
    this.key = key;
    this.status = !this.status;
  }
  //pagination
  p: number = 1;


  //reload page
  reloadPage(): void {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
