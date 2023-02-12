import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  Welcome: String = 'Welcome To PC-FIX Home';
  Pc: String = 'PC-FIX-the Own Home!!';
  Fix: String = 'You can Choose Many Computers';
  ngOnInit(): void {}
}
