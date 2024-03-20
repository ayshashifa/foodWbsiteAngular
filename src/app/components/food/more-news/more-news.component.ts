import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';
import { appApiResources } from 'src/app/constants/app.constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrls: ['./more-news.component.css'],
})
export class MoreNewsComponent implements OnInit {
  news: any[] = [];
  tags!: string[];
  newsDetails: any;
  commentform!: FormGroup;
  listComment:any;

  constructor(private service: HttpService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getnews();
    this.commentform = this.fb.group({
      name: ['', Validators.required],
      comment: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  getnews(): void {
    this.service.get(appApiResources.getmoreNews).subscribe({
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
    this.service.get(apiEndpoint).subscribe({
      next: (data: any) => {
        if (data.status === 'true') {
          this.newsDetails = data.getdetails;
          this.listComment = data.getcomment;
          this.tags = this.newsDetails.tags
            .split(',')
            .map((tag: string) => tag.trim());
        } else {
          console.error('Error fetching news details:', data);
        }
      },
      error: (error: any) => {
        console.error('Error fetching news details:', error);
      },
    });
  }
  message: any;
  onSubmit(newsId: number) {
    if (this.commentform.valid) {
      const body = {
        name: this.commentform.value.name,
        email: this.commentform.value.email,
        comment: this.commentform.value.comment,
        news_id: newsId,
      };
      this.service.post(appApiResources.postcomment, body).subscribe({
        next: (data: any) => {
          if (data.status === true) {
            alert('success');
            this.message = data.message;
            console.log('test', this.message);
            setTimeout(() => {
              location.reload();
            }, 2000);
          } else {
          }
        },
      });
    }
  }
  markAllControlsAsTouched() {
    Object.keys(this.commentform.controls).forEach((controlName) => {
      this.commentform.get(controlName)?.markAsTouched();
    });
  }

}
