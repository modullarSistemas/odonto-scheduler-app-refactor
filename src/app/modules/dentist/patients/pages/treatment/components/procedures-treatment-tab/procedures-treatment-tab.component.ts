import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { lastValueFrom } from 'rxjs';
import { ProcedureStatusEnum } from 'src/app/shared/enums/ProcedureStatusEnum';
import { TreatmentsService } from 'src/app/shared/services/treatments.service';

@Component({
  selector: 'app-procedures-treatment-tab',
  templateUrl: './procedures-treatment-tab.component.html',
  styleUrls: ['./procedures-treatment-tab.component.css']
})
export class ProceduresTreatmentTabComponent implements OnInit {
  @Input() treatment: any;
  @Input() updateTreatment: any;

  constructor(
    private treatmentService: TreatmentsService,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
  }

  async markProcedureAsCompleted(procedure: any) {
    await lastValueFrom(this.treatmentService.UpdateProcedureStatus(procedure.id, ProcedureStatusEnum.Finalizado));
    const snackBarRef = this.snackBar.open('Procedimento marcado como completo!!', 'Ok', {duration: 2000, panelClass: 'blue-snackbar'});
    snackBarRef.afterDismissed().subscribe(info => {
      this.updateTreatment();
    });
  }


}
