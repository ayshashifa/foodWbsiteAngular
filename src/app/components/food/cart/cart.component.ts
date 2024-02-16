import { appApiResources } from 'src/app/constants/app.constants';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }

}
