import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Treatment } from 'src/app/shared/models/Treatment';
import { PayTreatmentInstallmentDialogComponent } from '../pay-treatment-installment-dialog/pay-treatment-installment-dialog.component';

@Component({
  selector: 'app-financial-tab',
  templateUrl: './financial-tab.component.html',
  styleUrls: ['./financial-tab.component.css']
})
export class FinancialTabComponent implements OnInit {

  @Input() treatments?: Treatment[];
  @Input() getTreatments: any;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }


  openPayTreatmentInstallmentDialog(installment: any) {
    let data = {
      installmentId: installment.id
    };

    const dialogRef = this.dialog.open(PayTreatmentInstallmentDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTreatments();
    });
  }
}
