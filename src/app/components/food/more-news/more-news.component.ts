import { Component, OnInit } from '@angular/core';
import { appApiResources } from 'src/app/constants/app.constants';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrls: ['./more-news.component.css'],
})
export class MoreNewsComponent implements OnInit {
  news: any[] = [];
  tags!: string[];
    newsDetails: any;
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
  selectedNewsId: number | null = null;
  readmore(newsId: number) {
    this.selectedNewsId = newsId;
    const apiEndpoint = `${appApiResources.getnewsId}${newsId}`;
    this.http.get(apiEndpoint).subscribe({
      next: (data: any) => {
        if (data.status === 'true') {
          this.newsDetails = data.getdetails;
          this.tags = this.newsDetails.tags.split(',').map((tag: string) => tag.trim());  
          console.log('inner', this.newsDetails);
          console.log('tags', this.tags);
          console.log("comment",this.newsDetails.comments)
        } else {
          console.error('Error fetching news details:', data);
        }
      },
      error: (error: any) => {
        console.error('Error fetching news details:', error);
      },
    });
  }
}