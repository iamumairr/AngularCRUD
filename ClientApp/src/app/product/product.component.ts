import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) { }

  public products: Product[] = [];

  ngOnInit(): void {
    this.LoadProducts();
  }
  LoadProducts(): void {
    this.productService.getAll().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error("Error fetching products:", error);
      }

    );
  }

  deleteProduct(id: number): void {
    if (confirm("Are your sure to delete this?")) {
      this.productService.delete(id).subscribe(
        () => {
          this.LoadProducts();
        },
        (error) => {
          console.error("Error deleting product", error);
        }
      )
    }
  }
}
