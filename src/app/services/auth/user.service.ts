import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { appApiResources } from 'src/app/constants/app.constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userData = new BehaviorSubject<any>(null);

  constructor(private http:HttpService) {
    this.getUser()
   }
  userDetail:any[]=[];

  getUser(){
    if (!localStorage.getItem('token')) return;
    this.http.get(appApiResources.getUserDetail).subscribe({
      next: (data: any) => {
        if (data?.data) this.userData.next(data.data);
        else this.userData.next(null)
      },
      error: error => {
        this.userData.next(null);
      }
    })
  }
}
