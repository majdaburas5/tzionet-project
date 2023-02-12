import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  order:any=[]

  baseURL: string = 'http://localhost:8000/api/';
  headers = { 'content-type': 'application/json' };

  constructor(private http:HttpClient) { }

  getAllcartDetails(): Observable<any> {
    return this.http.get(this.baseURL + 'getCart');
  }

  addToCart(cart: Cart): Observable<any> {
    let body = JSON.stringify(cart);
    console.log(body);
    return this.http.post(this.baseURL + 'addToCart', body, {
    headers: this.headers
    });
  }

  cartDeleted(cart :any): Observable<any>{
    return this.http.delete(this.baseURL + 'deleteCartItem/' + cart._id);
  }

}

export class Cart {
  productName!: String;
  userName!: String;
  picture!: String;
  price!: number;


  setCart(productName:string,userName:string,picture:string,price:number){

    this.productName=productName
    this.userName = userName
    this.picture= picture
    this.price = price
  }
}
