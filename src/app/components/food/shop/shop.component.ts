import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { appApiResources } from 'src/app/constants/app.constants';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shopList: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getShopList();
  }
  getShopList() {
    this.http.get(appApiResources.getShopList).subscribe({
      next: (data: any) => {
        this.shopList = data.datas;
        console.log(this.shopList);
      },
    });
  }
  
}