import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { TreatmentTypeEnum } from 'src/app/shared/enums/TreatmentTypeEnum';
import { routes } from 'src/app/shared/models/routes';
import { ProceduresService } from 'src/app/shared/services/procedures.service';

@Component({
  selector: 'app-new-procedure',
  templateUrl: './new-procedure.component.html',
  styleUrls: ['./new-procedure.component.css'],
})
export class NewProcedureComponent implements OnInit {
  routes: typeof routes = routes;
  isLoading = false;

  procedureForm = new FormGroup({
    name: new FormControl('', Validators.required),
    cost: new FormControl(0, Validators.required),
    treatmentType: new FormControl(1),
  });

  constructor(
    private proceduresService: ProceduresService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  get treatmentTypeEnum(): typeof TreatmentTypeEnum {
    return TreatmentTypeEnum;
  }

  async createProcedure() {
    let data = this.procedureForm.value;
    this.isLoading = true;

    this.proceduresService.createProcedure(data).subscribe({
      next: (res) => {
        const snackBarRef = this.snackBar.open('Novo procedimento adicionado!', 'Ok', {
          duration: 2000,
          panelClass: 'blue-snackbar',
        });
        snackBarRef.afterDismissed().subscribe((info) => {
          this.router.navigate([this.routes.MANUAL_REGISTERS_PROCEDURES_ADM]);
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    });
  }
}
