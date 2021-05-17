import { BrandService } from './../brand.service';
import { Brand } from './../models/brand';
import { Product } from './../models/product';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css']
})
export class TrendComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private brandService: BrandService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getListBrand();
    this.getListProduct();
    this.index.fill(1);
  }

  listProduct: Product[] = [];
  listBrand: Brand[] = [];

  //get list product
  getListProduct(): void {
    this.productService.getProduct().subscribe(
      (updateProducts) => {
        this.listProduct = updateProducts;
      });
  }
  //get list brand

  getListBrand(): void {
    this.brandService.getBrand().subscribe(
      (updateBrand) => {
        this.listBrand = updateBrand;
      }
    );
  }

  slides = [

  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };



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

  index: number[]=[];
  //next slick
  i: number = 1;
  next(i: any): any {
    // if ((this.listProduct.length - 4) > this.index[i-1]) {
      // if ((10 - 4) > this.index[i-1]) {
      // this.index[i-1] = this.index[i-1] + 4;
      // return (this.index[i-1]);
      if(6>this.i){
        return this.i=this.i+4;
      }
      return this.i = this.i-6;
    }
    

  
  //press slick
  press(i:any): any {
    // if (this.index[i-1] > 4) {
    //   this.index[i-1] = this.index[i-1] - 4;
    //   return (this.index[i-1]);
    // }
    // return this.index[i-1] = 10 - this.index[i-1];

    if(this.i>4){
      return this.i=this.i-4;
    }
    return this.i=10-this.i;
  }


  //seeMoreProduct
  seeMoreProduct(id: number): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['/detail/' + id]));
  }


  //get list brand

}
