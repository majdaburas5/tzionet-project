import { Component, Input, OnInit } from '@angular/core';
import { AddToCartService, Cart } from '../add-to-cart.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  addToCart: any = [];
  cart = new Cart();
  totalPrice: number = 0;
  totalItems: number = 0;

  constructor(
    private productChosen: AddToCartService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.productChosen.getAllcartDetails().subscribe((data: Cart[]) => {
      for (let cart of data)
        if (cart.userName == this.usersService.getUserName()) {
          this.totalPrice += cart.price;
          this.totalItems++;
          this.addToCart.push(cart);
        }
    });
  }

  buttonPurchaseClicked() {
    window.alert('Thanks You For Purchase');
    for (let cart of this.addToCart) {
      this.productChosen.cartDeleted(cart).subscribe((data) => {
        console.log(data);
      });
    }
    this.addToCart = [];
    this.totalItems = 0;
    this.totalPrice = 0;
  }
}
