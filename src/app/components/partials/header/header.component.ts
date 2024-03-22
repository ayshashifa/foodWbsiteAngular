import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { appApiResources } from 'src/app/constants/app.constants';
import { Router } from '@angular/router';
import { UserService} from 'src/app/services/auth/user.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('openLoginPopup') openLoginPopup!: ElementRef;
  @ViewChild('closeLoginModal') closeLoginModal!: ElementRef;
  @ViewChild('openOtpModal') openOtpModal!: ElementRef;
  @ViewChild('closeOtpModal') closeOtpModal!: ElementRef;
  
  loading = false;
  token = localStorage.getItem('token') || '';
  userData :any = null;
  constructor(
    private http: HttpService,
    private router: Router,
    private userStore : UserService,
  ) {
    this.userStore.userData.subscribe((data: any) => {
      this.userData = data;
    })
  }
  openLoginModal() {
    this.openLoginPopup.nativeElement.click();
  }

  openOtp(email: string) {
    if (!email) {
      alert('Email is required');
      return;
    }
    this.loading = true;
    this.http.post(appApiResources.login, { email: email })
      .subscribe({
        next: (data: any) => {
          this.loading = false;
          this.openOtpModal?.nativeElement.click();
          this.closeLoginModal.nativeElement.click(); // Close login modal
        },
        error: (error) => {
          this.loading = false;
          let msg = error?.error?.message || 'Invalid User';
          alert(msg);
        },
      });
  }

  loginWithOTP(otp: string, email: string) {
    if (!otp || otp.length !== 6) {
      alert('Enter Valid 6 digit OTP Number');
      return;
    }
    this.loading = true;
    this.http.post(appApiResources.otpVerify, { email: email, otp: otp })
      .subscribe({
        next: (data: any) => {
          this.loading = false;
          if (data.status === true && data.token) {
            localStorage.setItem('token', data.token);
            this.closeOtpModal?.nativeElement.click(); // Close OTP modal
            this.token = data.token; // Update token
          }
        },
        error: (error) => {
          this.loading = false;
          let msg = error?.error?.message || 'Invalid OTP';
          alert(msg);
        },
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.token = ''; // Update token
    this.router.navigate(['/']);
    setTimeout(() => {
      location.reload();
    }, 100);
  }

  isLoggedIn() {
    return this.token !== '';
  }
  isDropdownOpen: boolean = false;

  // Method to toggle dropdown state
  toggleDropdown(open: boolean) {
    this.isDropdownOpen = open;
  }
}
