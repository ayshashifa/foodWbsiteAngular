import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { appApiResources } from 'src/app/constants/app.constants';
import { Router } from "@angular/router";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  shopList: any[] = [];
  singleData: any[] = [];
  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit(): void {
    this.getShopList();
  }
  getShopList() {
    this.http.get(appApiResources.getShopList).subscribe({
      next: (data: any) => {
        this.shopList = data.datas;
        console.log('shop', this.shopList);
      },
    });
  }
  redirect(shop_id: any,name:string,price:Number) {
    const body = `${appApiResources.getSingleShopList}${shop_id}`;
    this.http.get(body).subscribe({
      next: (data: any) => {
        this.singleData = data.datas;
        this.router.navigate(['single-product'],{ fragment: shop_id})
        console.log('singleData', this.singleData);
      },
    });
  }
}
