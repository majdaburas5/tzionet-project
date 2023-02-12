import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  selectedCategory: any;
  constructor() {}

  catagories: any = [{ name: 'Apple' }, { name: 'Lenovo' }, { name: 'Asus' }];

  ngOnInit(): void {}

  showApple() {
    this.selectedCategory = 'Apple';
  }

  showLen() {
    this.selectedCategory = 'Lenovo';
  }

  showA() {
    this.selectedCategory = 'Asus';
  }
}
