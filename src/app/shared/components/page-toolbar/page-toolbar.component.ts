import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-toolbar',
  templateUrl: './page-toolbar.component.html',
  styleUrls: ['./page-toolbar.component.css']
})
export class PageToolbarComponent implements OnInit {
  @Input() title?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
