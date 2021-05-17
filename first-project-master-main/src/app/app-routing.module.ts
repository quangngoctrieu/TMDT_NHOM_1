import { MyAccountComponent } from './my-account/my-account.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ManagerBrandComponent } from './manager-brand/manager-brand.component';
import { ChangeProductComponent } from './change-product/change-product.component';
import { ManagerStatiscalComponent } from './manager-statiscal/manager-statiscal.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ManagerProductComponent } from './manager-product/manager-product.component';
import { ManagerOderComponent } from './manager-oder/manager-oder.component';
import { ManagerHistoryOderComponent } from './manager-history-oder/manager-history-oder.component';
import { ManagerAccountComponent } from './manager-account/manager-account.component';
import { AslidebaradminComponent } from './aslidebaradmin/aslidebaradmin.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { InforComponent } from './infor/infor.component';
import { AccountComponent } from './account/account.component';
import { TrendComponent } from './trend/trend.component';
import { CartComponent } from './cart/cart.component';
import { Product } from './models/product';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: ProductsComponent},// trang chủ
  {path: 'detail/:id', component: ProductDetailComponent},// chi tiết
  {path: 'cart', component: CartComponent},// giỏ đồ
  {path: 'trend', component: TrendComponent},// xu hướng
  {path: 'account', component: AccountComponent},//tài khoản
  {path: 'account/infor', component: InforComponent},// thông tin tài  khoản
  {path: 'login', component: LoginComponent},// đăng nhập
  {path: 'cart/history', component: HistoryComponent},// lịch sử mua
  {path: 'manengadmin', component: AslidebaradminComponent,
    children:[
      {path: 'manegaaccount', component: ManagerAccountComponent},// quản lý tài khoản
      {path: 'manegahistoryoder', component: ManagerHistoryOderComponent},//quản lý lịch sử mua hàng
      {path: 'manegaoder', component: ManagerOderComponent},// quản lý đặt hàng
      {path: 'manegaproduct', component: ManagerProductComponent},// quản lý sản phẩm
      {path: 'manegastatiscal', component: ManagerStatiscalComponent},// quản lý thống kê
      {path: 'manegabrand', component: ManagerBrandComponent}// quản lý hãng
    ]
  },//page admin
  {path: 'changeproduct/:id',component: ChangeProductComponent},// thay đổi thồn tin sản phẩm
  {path: 'addproduct', component: AddProductComponent},// them san pham
  {path: 'myaccount', component: MyAccountComponent},// quanr ly tai khoan 
  {path: '**', component: PageNotFoundComponentComponent}// 404 page
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
