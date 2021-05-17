import { AccountService } from './account.service';
import { CartService } from './cart.service';
import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { FormsModule} from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { TrendComponent } from './trend/trend.component';
import { InforComponent } from './infor/infor.component';
import { LoginComponent } from './login/login.component';
import { BottomComponent } from './bottom/bottom.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HistoryComponent } from './history/history.component';
import { AslidebaradminComponent } from './aslidebaradmin/aslidebaradmin.component';
import { ManagerAccountComponent } from './manager-account/manager-account.component';
import { ManagerOderComponent } from './manager-oder/manager-oder.component';
import { ManagerProductComponent } from './manager-product/manager-product.component';
import { ManagerHistoryOderComponent } from './manager-history-oder/manager-history-oder.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ManagerStatiscalComponent } from './manager-statiscal/manager-statiscal.component';
import { ChangeProductComponent } from './change-product/change-product.component';
import { ManagerBrandComponent } from './manager-brand/manager-brand.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    AccountComponent,
    TrendComponent,
    InforComponent,
    LoginComponent,
    BottomComponent,
    HistoryComponent,
    AslidebaradminComponent,
    ManagerAccountComponent,
    ManagerOderComponent,
    ManagerProductComponent,
    ManagerHistoryOderComponent,
    PageNotFoundComponentComponent,
    ManagerStatiscalComponent,
    ChangeProductComponent,
    ManagerBrandComponent,
    AddProductComponent,
    HeaderAppComponent,
    MyAccountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,
    FontAwesomeModule

  ],
  providers: [//khai bao service sử dụng
    ProductService,
    CartService, 
    AccountService
  ],// khai báo service sử dụng
  bootstrap: [AppComponent]
})
export class AppModule { }
