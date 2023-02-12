import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductDetailsService {
  baseURL: string = 'http://localhost:8000/api/';
  headers = { 'content-type': 'application/json' };

  constructor(private http:HttpClient) { 
  }

  getAllProducts(): Observable<any> {
    return this.http.get(this.baseURL + 'getProducts');
  }
 }

export class Product{
  ProductName!: string;
  Category!: string;
  Picture!: string;
  Price!: number;
  Weight!: string;
  Calories!: string;
  fat!: string;
  carbs!: string;
}



