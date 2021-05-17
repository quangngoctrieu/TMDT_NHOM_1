import { Product } from './../models/product';
import { BrandService } from './../brand.service';
import { Brand } from './../models/brand';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private brandService: BrandService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBrands();
  }

  brands: Brand[] = [];
  getBrands(): void {
    this.brandService.getBrand().subscribe(
      brand => {
        this.brands = brand;
        this.selected = brand[0].name;
      }
    );
  }
  selected: any;
  product: Product = new Product;
  //kiem tra mau
  colorwhite: boolean = false;
  coloryellow: boolean = false;
  colorblu: boolean = false;
  colorred: boolean = false;
  colorblack: boolean = false;
  colorbrown: boolean = false;
  colorping: boolean = false;

  //set value cho opion
  checkOption(brandcheck: string): boolean {
    if (this.product.brand === brandcheck)
      return true;
    return false;
  }

  xem(newimg: string, name: string, type: string, price: string, infor: string): void {
    if (!newimg || !name || !type || !price || !infor) {
      alert(" vui lòng điển đầy đủ thông tin");
    }
    else {
      var color = '';
      if (newimg != '') {
        newimg = '../../images/' + newimg.slice(12);
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
      color = this.product.color;

      const pricenumber = Number(price);
      const p = this.product;
      p.name = name;
      p.brand = this.selected;
      p.color = color;
      p.image = newimg;
      p.infor = infor;
      p.price = pricenumber;
      p.type = type;
      this.productService.addProductFromAdmin(p).subscribe(
        newproduct => {
          console.log(newproduct);
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
