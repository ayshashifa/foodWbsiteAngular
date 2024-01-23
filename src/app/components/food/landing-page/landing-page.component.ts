import { Component, OnInit } from '@angular/core';
import { appApiResources, backendUrl } from 'src/app/constants/app.constants';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  news: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getnews();
  }
  getnews(): void {
    this.http.get(appApiResources.getmoreNews).subscribe({
      next: (data: any) => {
        this.news = data;
        console.log('news', this.news);
      },
      error: (error: any) => {
        console.error('Error fetching news:', error);
      },
    });
  }
}