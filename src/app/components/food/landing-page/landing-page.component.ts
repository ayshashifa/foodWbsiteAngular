import { Component, OnInit } from '@angular/core';
import { appApiResources } from 'src/app/constants/app.constants';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  news: any[] = [];
  firstdata: any;
  secdata: any;
  thirddata: any;
  shop: any[] = [];
  firstshop:any;
  secshop:any;
  thirdshop: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getShop();
    this.getnews();
  }
  getnews(): void {
    this.http.get(appApiResources.getmoreNews).subscribe({
      next: (data: any) => {
        this.news = data;
        this.firstdata = data[0];
        this.secdata = data[1];
        this.thirddata = data[2];
        console.log('news', this.news);
        console.log('first', this.firstdata);
      },
      error: (error: any) => {
        console.error('Error fetching news:', error);
      },
    });
  }
  getShop() {
    this.http.get(appApiResources.getShopList).subscribe({
      next: (data: any) => {
        this.shop = data.datas;
        this.firstshop = data.datas[0];
        this.secshop = data.datas[1];
        this.thirdshop = data.datas[2];
        console.log('shop', this.shop);
      },
    });
  }
}
