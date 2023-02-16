import { Component, Input, OnInit } from '@angular/core';
import { PaymentMethodEnum } from 'src/app/shared/enums/PaymentMethodEnum';

@Component({
  selector: 'app-income-item',
  templateUrl: './income-item.component.html',
  styleUrls: ['./income-item.component.css']
})
export class IncomeItemComponent implements OnInit {

  @Input() income: any;
  paymentMethod: any;

  paymentMethodOptions = [
    {
      name: "Cartao de credito",
      value: PaymentMethodEnum.CreditCard
    },
    {
      name: "Dinheiro",
      value: PaymentMethodEnum.Cash
    },
    {
      name: "Cheque",
      value: PaymentMethodEnum.Check
    },
    {
      name: "Pix",
      value: PaymentMethodEnum.Pix
    },
  ];

  constructor() {
   }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.paymentMethod = this.paymentMethodOptions.find( (method) => this.income.paymentMethod == method.value );
  }
}
