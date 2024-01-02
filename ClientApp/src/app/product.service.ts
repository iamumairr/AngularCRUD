import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://localhost:7228';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/api/Product`);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/api/Product/${id}`);
  }

  create(data: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/api/Product`, data);
  }

  update(id: number, data: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/api/Product/${id}`, data);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/api/Product/${id}`);
  }
}
