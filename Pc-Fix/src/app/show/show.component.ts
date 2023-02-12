import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  @ViewChild(SidebarComponent) sidebar! :SidebarComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
