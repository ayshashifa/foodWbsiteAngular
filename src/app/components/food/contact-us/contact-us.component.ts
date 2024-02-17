import { Component, OnInit } from '@angular/core';
import { appApiResources } from 'src/app/constants/app.constants';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  newform!: FormGroup;
  messagedata: any;
  showSuccessMessage:boolean= false;
  constructor(private http: HttpClient, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.newform = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',[Validators.required]],
      subject: [''],
      message: ['', Validators.required],
    });
  }
  contactusform() {
    // if (this.newform.invalid) {
    //   return;
    // }
    if (this.newform.valid) {
      const body = {
        name: this.newform.value.name,
        email: this.newform.value.email,
        phone: this.newform.value.phone,
        subject: this.newform.value.subject,
        message: this.newform.value.message,
      };
  
      this.http.post(appApiResources.postContactUs, body).subscribe({
        next: ( data:any) => {
          if (data.status === true) {
           alert('Message sent successfully!')
            // Reset form
            this.newform.reset();
          } else {
            // Display error message
            alert('Error sending message.');
          }
        },
        error: () => {
          // Display error message
          alert('Error sending message.');
        },
      });
    }
  }
}