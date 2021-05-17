import { Product } from './../models/product';
import { ItemCheckOut } from './../models/itemcheckout';
import { CartService } from './../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Item } from './../models/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private items: Item[]=[];
  private total: number=0;
  abc: any;
  priceCheckOutAll: number=0;// tổng số tiền tất cả các sản phẩm

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    public cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  product: Product=new Product();
  getProductFromRouter(id: number): void{
    //const id=Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductFromId(id).subscribe(product=>this.product=product);
  }

  ngOnInit(): void {
    this.getItemFromItemService();
  }

  getItemFromItemService(): void {
    //this.products=this.productService.getProduct();
    //this.items=this.cartService.getItem();
    // this.abc=localStorage.getItem('');
    // this.items=this.abc;

  
  }
  // checkOutAll(price: number): void{
  //   this.priceCheckOutAll=this.priceCheckOutAll+price;
  // }
  
  //mua từng sản phẩm
  checkOutItem(itemCheckOut: Item){
    // alert(id);
    const itemCO:ItemCheckOut=new ItemCheckOut();
    itemCO.idproduct=itemCheckOut.id;
    itemCO.name=itemCheckOut.name;
    itemCO.price=itemCheckOut.price;
    itemCO.size=itemCheckOut.size;
    itemCO.color=itemCheckOut.color;
    itemCO.total=itemCheckOut.total;
    itemCO.status=false;
    this.getProductFromRouter(itemCheckOut.id);
    if(!localStorage.getItem('account')){
      alert('Login, please');
    }
    else{
      this.cartService.checkOutitem(itemCO).subscribe(insertItemCart => {
        this.productService.updateProduct(this.product, itemCheckOut.total);
        if(insertItemCart){
          console.log('ok');
        }
      });
    }  
  }

  seeItem(){
    // var itemLocal = localStorage.getItem("itemLocal");
    // // Parse the JSON string back to JS object
    // var retrievedObject = (localStorage.getItem('itemLocal'));
    // console.log((localStorage.getItem('itemLocal'))
    //console.log(localStorage.getItem('itemLocal'));


    let sto=localStorage.getItem('itemLocal');
    console.log(sto);
  
    
  }

  //return to home page
  seeHomePage(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['/home/']));
  }
}
