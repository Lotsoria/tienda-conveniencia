import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environtment } from 'src/environment/environtment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = environtment.url_productos;
  constructor(private http: HttpClient) {}

  getAllProducts(){
      return this.http.get<any>(`${this.url}find`);
  }
}
