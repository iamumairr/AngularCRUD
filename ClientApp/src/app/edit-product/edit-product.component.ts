import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  productId: number = 0;
  product: Product = { id: 0, name: '', email: "", address: '' };

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id']; // '+' converts the string to a number
      this.productService.get(this.productId).subscribe(
        (product) => {
          this.product = product;
        },
        (error) => {
          console.error('Error loading product:', error);
        }
      );
    });
  }

  edit() {
    this.productService.update(this.productId, this.product).subscribe(
      () => {
        this.router.navigate(['/product']);
      },
      (error) => {
        console.error('Error updating product:', error);
      }
    );
  }
}
