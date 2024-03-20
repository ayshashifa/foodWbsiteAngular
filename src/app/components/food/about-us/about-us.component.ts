import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  constructor(
    public ts: TestService,  ) { 
}

ngOnInit(): void {
}
  icreasecount(){
     this.ts.count++

  // }
  }
}
//   ngDoCheck(): void {
//     console.log("ngDoCheck")
//     }ngOnChange(): void {
//       console.log("ngOnChange")
//       }ngAfterContentInit(): void {
//         console.log("ngAfterContentInit")
//         }ngAfterContentChecked(): void {
//           console.log("ngAfterContentChecked")
//           }ngAfterViewInit(): void {
//             console.log("ngAfterViewInit")
//             }ngAfterViewCheck(): void {
//               console.log("ngAfterViewCheck")
//               }ngOnDestroy(): void {
//                 console.log("ngOnDestroy")
//                 }
// }
