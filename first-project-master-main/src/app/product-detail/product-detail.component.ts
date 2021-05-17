import { CartService } from './../cart.service';
import { Item } from './../models/item';
import { Observable } from 'rxjs';
import { ProductService } from './../product.service';
import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()
  product: Product = new Product;
  productdetail!: Product;
  activatedRoute: any;
  item: Item | undefined;
  listProducts: Product[] = []; // list product see more
  name: any;// for search of see more
  sizeChoose: string[] = ["S", "M", "L", "XL", "XXL"];// các loại size áo
  colorChoose: string[] = ["White", "black", "blue", "red", "brown", "pink"];
  valueSize: string = 'S';// gán giá trị size ban đầu là size S
  valueColor: string = 'White';
  amount: number = 1;// số lượng sản phẩm mua
  total: number = 0;// tổng tiền trả


  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductFromRouter();
    this.getProductFromService();

  }
  getProductFromRouter(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductFromId(id).subscribe(product => this.product = product);
  }

  //getlist
  getProductFromService(): void {
    //this.products=this.productService.getProduct();
    this.productService.getProduct().subscribe(
      (updateProducts) => {
        this.listProducts = updateProducts;
      }
    );
  }

  //get total when start load page

  seeMore(brand: string): void {// xem các phẩm cùng hãng
    this.name = brand;
  }


  //get Size
  setSize(event: any) {
    this.valueSize = event.target.value;
  }

  //get Color
  setColor(event: any) {
    this.valueColor = event.target.value;
  }

  //tăng giảm số lượng
  decrease(): void {
    if (this.amount > 1)
      this.amount = this.amount - 1;
    this.total = this.product.price * this.amount;
  }
  increase(): void {
    this.amount = this.amount + 1;
    this.total = this.product.price * this.amount;
  }


  addToCart(idAddToCart: number, nameAddToCart: string, priceAddToCart: number): void {
    if (this.total == 0)
      this.total = priceAddToCart;
    // if(this.valueColor=='')
    // this.valueColor=this.product.color[lengthArray-1];
    //get lenth of array color
    // alert("id:"+idAddToCart+" name: "+nameAddToCart+" amount: "+this.amount+ " size:" + this.valueSelect+ "money "+ this.total+ " color:"+this.valueColor);
    this.item = new Item(idAddToCart, nameAddToCart, priceAddToCart, this.valueSize, this.valueColor, this.amount, false);
    this.cartService.addItem(this.item);// thêm vào cart service
    // localStorage.setItem('item', JSON.stringify(this.item));
  }

  //next slick
  i: number = 1;
  next(): any {
    if ((this.listProducts.length - 4) > this.i) {
      this.i = this.i + 4;
      return (this.i);
    }
    return this.i = this.listProducts.length - this.i;

  }
  //press slick
  press(): any {
    if (this.i > 4) {
      this.i = this.i - 4;
      return (this.i);
    }
    return this.i = this.listProducts.length - this.i;
  }

  //back
  goBack(): void {
    this.location.back();
  }

  //seeMoreProduct
  seeMoreProduct(id: number): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['/detail/' + id]));
  }
}
