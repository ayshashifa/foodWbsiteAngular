import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appApiResources } from 'src/app/constants/app.constants';
import { CartService } from 'src/app/services/cart.service';
import { HttpService } from 'src/app/services/http/http.service';
import {userDetailsStore} from 'src/app/store/user-details'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isHomePage = false;
  @ViewChild('openLoginPopup') openLoginPopup!: ElementRef;
  @ViewChild('closeLoginModal') closeLoginModal!: ElementRef;
  @ViewChild('openOtpModal') openOtpModal!: ElementRef;
  @ViewChild('closeOtpModal') closeOtpModal!: ElementRef;

  @ViewChild('openroleModal') openroleModal!: ElementRef;
  @ViewChild('closeroleModal') closeroleModal!: ElementRef;
  loading = false;
  @Input() singleImege = '/assets/logo/banner-img/banner1.JPG';
  userData: any = null;
  constructor(
    // private toastr: ToastrService,
    private http: HttpService,
    private router: Router,
    private userStore: userDetailsStore
  ) {
    this.userStore.userData.subscribe((data: any) => {
      this.userData = data;
      // Check user type and set header text accordingly
      if (data && data.type) {
        if (data.type === 'sponsorship') {
          this.headerText = 'Sponsorship';
         
        } else {
          this.headerText = 'Dashboard';
          
        }
      }
    });

  }
  ngOnInit(): void {
    
  }
  isLoggedIn() {
    return this.token !== '';
  }
  show = true;
  type: string = '';
  token = localStorage.getItem('token') || '';

  openOtp(email: any) {
    if (!email) {
      alert('Email is required');
      return;
    }
    this.loading = true;
    this.http
      .post(appApiResources.login, { email: email })
      .subscribe({
        next: (data: any) => {
          this.loading = false;
          this.openOtpModal?.nativeElement.click();
        },
        error: (error) => {
          this.loading = false;
          let msg = error?.error?.message;
          if (!msg) msg = 'Invalid User';
          alert( msg);
        },
      });
  }
  headerText: any = '';
  loginWIthOTP(otp: any, email: any) {
    if (!otp || otp.length != 6) {
      alert('Enter Valid 6 digit OTP Number');
      return;
    }
    this.loading = true;
    this.http
      .post(appApiResources.otpVerify, { otp: otp, email: email })
      .subscribe({
        next: (data: any) => {
          console.log('data');
          this.loading = false;
          if (data.status == 'success' && data.token) {
            localStorage.setItem('token', data.token);
            this.closeOtpModal?.nativeElement.click();
            console.log(this.token);
            const userType = data.userdata?.type;
            this.type = data.userdata?.type || '';
            console.log('Type:', this.type);
            if (userType === 'sponsorship') {
              this.headerText = 'Sponsorship';
              this.router.navigate(['/Sponsorship-form']);
              setTimeout(() => {
                location.reload();
              });
            } else  {
              this.headerText = 'dashboard';
              this.router.navigate(['/dashboard']);
              setTimeout(() => {
                location.reload();
              });
            }
          }
        },
        error: (error) => {
          this.loading = false;
          let msg = error?.error?.message;
          if (!msg) msg = 'Invalid OTP';
          alert( msg);
        },
      });
  }

  donatenow() {
    this.router.navigate(['involved']);
  }
  openLoginModal() {
    this.openLoginPopup.nativeElement.click();
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    setTimeout(() => {
      location.reload();
    }, 100);
  }
  Sponsorship = false;
  donor = false;
  opendonorlogin() {
    this.openLoginPopup.nativeElement.click();
    this.donor = true;
    this.Sponsorship = false;
  }
  openrecipientlogin() {
    this.openLoginPopup.nativeElement.click();
    this.Sponsorship = true;
    this.donor = false;
  }
}
