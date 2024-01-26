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
//   shoplist: any[] = [];
//   constructor(private route: ActivatedRoute, private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getshopdetails();
//     this.route.params.subscribe((params) => {
//       const productId = params['shop_id'];
//       // Do something with productId
//     });
//   }
//   getshopdetails() {
//     this.http.get(appApiResources.getShopList).subscribe({
//       next: (data: any) => {
//         this.shoplist = data.datas;
//         console.log(this.shoplist)
//       },
//     });
//   }
// }
  shopId!: string;
  imagePath!: string;

constructor(private route: ActivatedRoute) { }

ngOnInit(): void {
   // Accessing the parameters
   this.route.params.subscribe(params => {
      this.shopId = params['id'];
      this.imagePath = params['imagePath'];
   });
}
}
