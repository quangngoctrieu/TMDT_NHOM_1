import { BrandService } from './../brand.service';
import { Brand } from './../models/brand';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-brand',
  templateUrl: './manager-brand.component.html',
  styleUrls: ['./manager-brand.component.css']
})
export class ManagerBrandComponent implements OnInit {

  constructor(private brandService: BrandService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllBrand();
  }
  brandChange!: Brand;
  openScrollableContent(longContent: any, brandchange: Brand) {
    this.brandChange = brandchange;
    this.modalService.open(longContent, { scrollable: true });
  }
  openScrollableContent2(longContent: any) {
    this.brandChange = new Brand;
    this.modalService.open(longContent, { scrollable: true });
  }

  openSm(content: any, branddelete: Brand) {
    this.id = branddelete.id;
    this.modalService.open(content, { size: 'sm' });
  }
  brands: Brand[] = [];
  getAllBrand(): void {
    this.brandService.getBrand().subscribe(
      getbrands => {
        this.brands = getbrands;
      }
    )
  }

  change(name: string): void {
    if (!name) {
      alert("vui lòng nhập tên nhãn hiệu");
    }
    else if (this.brandChange.id === 0) {
      this.brandChange.name = name;
      this.brandService.add(this.brandChange).subscribe(
        brAdd => {
          console.log('Add!');
          this.reloadPage();
        }
      )
    }
    else {
      this.brandChange.name = name;
      console.log(this.brandChange.id + name);
      this.brandService.changeBrand(this.brandChange).subscribe(
        brChange => {
          console.log('change!');
          this.reloadPage();
        }
      )
    }

  }

  //id xoa
  id = 0;
  delete(): void {
    this.brandService.delete(this.id).subscribe(
      deletebrand => {
        console.log('delete');
        this.reloadPage();
      }
    )
  }
  //reload trang
  reloadPage(): void {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  //
  //brandadd
  brandaad!: Brand;

  //tìm kiếm
  nameseach: any;
  //sắp xếp
  key: string = 'id';
  status: boolean = false;
  sort(key: string) {
    this.key = key;
    this.status = !this.status;
  }
}
