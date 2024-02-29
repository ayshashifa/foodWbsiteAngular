import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appApiResources } from 'src/app/constants/app.constants';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // loginform!: FormGroup;
  constructor(private http: HttpClient, public fb: FormBuilder) {}

  ngOnInit(): void {
    // this.loginform = this.fb.group({
    //   email: ['', Validators.required],
    //   phone: ['', Validators.required],
    // });
  }
  // login() {
  //   if (this.loginform.valid) {
  //     const body = {
  //       email: this.loginform.value.email,
  //       phone: this.loginform.value.phone,
  //     };
  //     this.http.post(appApiResources.login, body).subscribe({
  //       next: (data: any) => {},
  //     });
  //   }
  // }
}
