import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css']
})
export class ExpenseItemComponent implements OnInit {

  @Input() expense: any;

  constructor() { }

  ngOnInit(): void {
  }

}
