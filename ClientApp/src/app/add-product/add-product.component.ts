import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProduct: Product = { id: 0, name: '', email: "", address: '' };

  constructor(private productService: ProductService, private router: Router) { }

  add(): void {
    this.productService.create(this.newProduct).subscribe(
      (createdProduct) => {
        // Refresh the list of products after adding a new product
        this.router.navigate(['/product']);
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }
}
