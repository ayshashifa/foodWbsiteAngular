import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appApiResources } from 'src/app/constants/app.constants';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  fragment: any | null;
  singleData: any[] = [];
  singleName: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.fragment = null;
  }
  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string | null) => {
      console.log('fragement', fragment);
      this.fragment = fragment;
    });
    this.getsingleData();
  }
  getsingleData() {
    const url = `${appApiResources.getSingleShopList}${this.fragment}`;
    this.http.get(url).subscribe({
      next: (data: any) => {
        this.singleData = data.datas;
        this.singleName = this.singleData;
        console.log("gyuyu",this.singleData)
      },
    });
  }
}
