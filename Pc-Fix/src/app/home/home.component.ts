import { Component, Input, OnInit } from '@angular/core';
import {ProductService} from './../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any=[]
  


  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
        this.products=this.ProductService.getproduct();

  }
  
}
