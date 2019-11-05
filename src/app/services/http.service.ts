import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.get(`${this.apiUrl}/products`).pipe(
      map(response => {
        return response.map((item: Product) => {
          item.selected = false;
          return item;
        }) as Product[];
      })
    );
  }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }
}
