import { Component, OnInit, Input } from '@angular/core';
import { AddToCartService, Cart } from '../add-to-cart.service';
import { ProductDetailsService } from '../product-details.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  cartData: any = [];

  products: any = [];
  ProductName: string = '';
  description: string = '';

  @Input() selectedCategory: string = ' ';
  constructor(
    private productDetailsService: ProductDetailsService,
    private addToCartService: AddToCartService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.refresh();

    this.cartRefresh();
  }

  refresh() {
    this.productDetailsService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  cartRefresh() {
    this.addToCartService.getAllcartDetails().subscribe((data) => {
      this.cartData = data;
    });
  }

  addToCart(
    productNameAdded: any,
    productPicAdded: any,
    productPriceAdded: any
  ) {
    var cart = new Cart();
    cart.setCart(
      productNameAdded,
      this.usersService.getUserName(),
      productPicAdded,
      productPriceAdded
    );

    window.alert('Laptop added to cart succesfully');

    this.addToCartService.addToCart(cart).subscribe((data) => {
      this.refresh();
    });
  }

  buttonShowDetailsClicked(name: string) {
    this.productDetailsService.getAllProducts().subscribe((data) => {
      for (let bro of data) {
        if (bro.ProductName == name) {
          this.ProductName = name;
          this.description = bro.description;
        }
      }
    });
  }
}
//Calories
