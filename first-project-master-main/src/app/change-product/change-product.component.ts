import { BrandService } from './../brand.service';
import { Brand } from './../models/brand';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-change-product',
  templateUrl: './change-product.component.html',
  styleUrls: ['./change-product.component.css']
})
export class ChangeProductComponent implements OnInit {

  selected = '';
  selectedCar: number | undefined;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private brandService: BrandService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductFromRouter();
    this.getBrands();
  }
  product: Product = new Product;
  //kiem tra mau
  colorwhite: boolean = false;
  coloryellow: boolean = false;
  colorblu: boolean = false;
  colorred: boolean = false;
  colorblack: boolean = false;
  colorbrown: boolean = false;
  colorping: boolean = false;
  color: any;
  getProductFromRouter(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductFromId(id).subscribe(product => {
      this.product = product;
      this.selected = this.product.brand;
      // for (let value in this.product.color) {
      //   // const newcolor='color'+color;
      //   if (this.product.color[value] === 'white')
      //     this.colorwhite = true;
      //   if (this.product.color[value] === 'yellow')
      //     this.coloryellow = true;
      //   if (this.product.color[value] === 'blu')
      //     this.colorblu = true;
      //   if (this.product.color[value] === 'red')
      //     this.colorred = true;
      //   if (this.product.color[value] === 'black')
      //     this.colorblack = true;
      //   if (this.product.color[value] === 'brown')
      //     this.colorbrown = true;
      //   if (this.product.color[value] === 'ping')
      //     this.colorping = true;

      // }
      this.color = this.product.color;
    });


  }

  brands: Brand[] = [];
  getBrands(): void {
    this.brandService.getBrand().subscribe(
      brand => this.brands = brand
    );
  }

  //set value cho opion
  checkOption(brandcheck: string): boolean {
    if (this.product.brand === brandcheck)
      return true;
    return false;
  }



  //lấy giá trị cần sumbit
  xem(newimg: string, oldimg: string, name: string, type: string, price: string, infor: string): void {
    if (!name || !type || !price || !infor) {
      alert(" vui lòng điển đầy đủ thông tin");
    }
    else {
      var color = '';
      if (newimg != '') {
        newimg = '../../images/' + newimg.slice(12);
      } else {
        newimg = oldimg;
      }
      // if (this.colorwhite) {
      //   color.push('white');
      // }
      // if (this.coloryellow) {
      //   color.push('yellow');
      // }
      // if (this.colorblu) {
      //   color.push('blu');
      // }
      // if (this.colorred) {
      //   color.push('red');
      // }
      // if (this.colorblack) {
      //   color.push('black');
      // }
      // if (this.colorbrown) {
      //   color.push('brown');
      // }
      // if (this.colorping) {
      //   color.push('ping');
      // }
      this.color = this.product.color;

      const pricenumber = Number(price);
      const p = this.product;
      p.name = name;
      p.brand = this.selected;
      p.color = color;
      p.image = newimg;
      p.infor = infor;
      p.price = pricenumber;
      p.type = type;

      this.productService.updateProductFromAdmin(p).subscribe(
        productUpdate => {
          console.log(productUpdate);
        }
      )
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/manengadmin/manegaproduct']);
    }

  }

  changColorWhite(e: any) {
    if (e.target.checked) {
      this.colorwhite = true;
      console.log('true');
    } else {
      console.log('false');
      this.colorwhite = false;
    }
  }

  //thay doi mau khi nhan check box
  changColorYellow(e: any) {
    if (e.target.checked) {
      this.coloryellow = true;
    } else {
      this.coloryellow = false;
    }
  }
  changColorBlu(e: any) {
    if (e.target.checked) {
      this.colorblu = true;
    } else {
      this.colorblu = false;
    }
  }
  changColorRed(e: any) {
    if (e.target.checked) {
      this.colorred = true;
    } else {
      this.colorred = false;
    }
  }
  changColorBlack(e: any) {
    if (e.target.checked) {
      this.colorblack = true;
    } else {
      this.colorblack = false;
    }
  }
  changColorBrown(e: any) {
    if (e.target.checked) {
      this.colorbrown = true;
    } else {
      this.colorbrown = false;
    }
  }
  changColorPing(e: any) {
    if (e.target.checked) {
      this.colorping = true;
    } else {
      this.colorping = false;
    }
  }


  //lay gia trij select brand
  showSelectValue(mySelect: any): void {
    this.selected = mySelect.target.value;
  }
}
