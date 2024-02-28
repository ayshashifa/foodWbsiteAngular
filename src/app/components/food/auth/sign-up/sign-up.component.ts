import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { appApiResources } from 'src/app/constants/app.constants';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  newform!: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {}
  // email: ['', [Validators.required, Validators.email]],
  ngOnInit(): void {
    this.newform = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  // ssmnn.vaseem03@hmail.com
  submitForm() {
    if (this.newform.valid) {
      const body = {
        name: this.newform.value.name,
        email: this.newform.value.email,
        phone: this.newform.value.phone,
        password: this.newform.value.password,
      };
      this.http.post(appApiResources.signUp, body).subscribe({
        next: (newUser: any) => {
          if (newUser.status === true) {
            alert('success' + newUser.message);
          } else {
            alert('fail' + newUser.message);
          }
        },
        error: (newUser) => {
          alert('Error: ' + newUser.message);
        },
      });
    }
  }
}
