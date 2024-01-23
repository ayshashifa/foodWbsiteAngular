import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { HttpClient } from '@angular/common/http';
import { appApiResources } from 'src/app/constants/app.constants';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

interface Profile {
  _id: string;
  name: string;
  // imagePath: string;
}

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart: Cart;
  imageData!: string;
  form!: FormGroup;
  profiles: any[] = [];

  constructor(private cartService: CartService, private fb: FormBuilder, private http: HttpClient) {
    this.cart = new Cart(); // Initialize your cart here
  }

  ngOnInit(): void {
    this.getExpenditureList();
    this.form = this.fb.group({
      // name: [null, Validators.required],
      file: [null, Validators.required],
    });
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string): void {
    const quantity = parseInt(quantityInString, 10);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  getImageUrl(url: string): string {
    return `http://localhost:8000/${url}`; // Replace with your server URL
  }

  getExpenditureList(): void {
    this.http.get(appApiResources.getexpenditurelist).subscribe({
      next: (data: any) => {
        this.profiles = data;
        console.log(this.profiles);
      },
      error: (error) => {
        console.error('Error fetching expenditure list:', error);
      },
    });
  }

  // onFileSelect(event: Event): void {
  //   const inputElement = event.target as HTMLInputElement;
    
  //   if (inputElement.files && inputElement.files.length > 0) {
  //     const file = inputElement.files[0];
  //     this.form.patchValue({ image: file });
  //     const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  
  //     if (allowedMimeTypes.includes(file.type)) {
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         this.imageData = reader.result as string;
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   }
  // }
  selectedFile: File | null = null;
 
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile); // Make sure the key matches your server expects ('file' in this case)

      this.http.post('http://localhost:8000/upload', formData).subscribe({
        next: (data: any) => {
          console.log('Image uploaded successfully:', data.message);
        },
        error: (error) => {
          console.error('Error uploading image:', error);
        },
      });
    }
  }
}