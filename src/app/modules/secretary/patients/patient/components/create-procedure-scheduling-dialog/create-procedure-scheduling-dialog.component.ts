import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { map, Observable, startWith } from 'rxjs';
import { ProcedureStatusEnum } from 'src/app/shared/enums/ProcedureStatusEnum';
import { Dentist } from 'src/app/shared/models/Dentist';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DentistsService } from 'src/app/shared/services/dentists.service';
import { ScheduleService } from 'src/app/shared/services/schedule.service';
import { TreatmentsService } from 'src/app/shared/services/treatments.service';
import { CreateEvalutionSchedulingDialogComponent } from '../create-evalution-scheduling-dialog/create-evalution-scheduling-dialog.component';

@Component({
  selector: 'app-create-procedure-scheduling-dialog',
  templateUrl: './create-procedure-scheduling-dialog.component.html',
  styleUrls: ['./create-procedure-scheduling-dialog.component.css']
})
export class CreateProcedureSchedulingDialogComponent implements OnInit {

  isLoading = false;
  procedureSchedulingForm: FormGroup | any;
  @ViewChild('picker') picker: any;

  isLoadingDentist = true;
  dentistFilteredOptions: Observable<Dentist[]> | any;
  dentistOptions: Dentist[] | any;

  treatmentOptions: any;
  treatment: any;
  selectedTreatmentProcedure: any;

  constructor(
    private snackBar: MatSnackBar,
    private scheduleService: ScheduleService,
    private dentistsService: DentistsService,
    public treatmentsService: TreatmentsService,
    public authService: AuthService,
    public dialogRef: MatDialogRef<CreateEvalutionSchedulingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    let user: any = this.authService.getUser();
    this.procedureSchedulingForm = new FormGroup({
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl(new Date()),
      scheduledBy: new FormControl(user.userId),
      franchiseId: new FormControl(user.franchiseId),
      pacientId: new FormControl(data.patientId),
      dentistId: new FormControl(''),
      procedureTypeId: new FormControl(0),
      schedulingType: new FormControl(2),
    });

    //get treatments
    //select treatment
    //show procedures available in that treatment

   }

  ngOnInit(): void {
    this.getDentistOptions();
    this.getTreatmentsOptions();
  }

  createProcedureScheduling() {
    this.isLoading = true;
    let data = this.procedureSchedulingForm.value;

    data.dentistId = parseInt(data.dentistId.id);
    data.pacientId = parseInt(data.pacientId);
    data.startDate = moment(data.startDate).toDate();
    data.endDate = moment(data.startDate).add(60, 'm').toDate();

    this.scheduleService.createProcedureScheduling(data).subscribe({
      next: res => {
        this.isLoading = false;
        this.dialogRef.close();
        const snackBarRef = this.snackBar.open('Novo procedimento agendado!', 'Ok', {duration: 2000, panelClass: 'blue-snackbar'});
      },
      error: error => {
        console.log(error);
      }
    });

    this.treatmentsService.updateProcedureStatus(this.selectedTreatmentProcedure.id, ProcedureStatusEnum.Agendado).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  private _filterDentists(value: any): Dentist[] {
    const filterValue = value.name ? value.name.toLowerCase() : '';
    return this.dentistOptions.filter((option: any) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  getDentistOptions() {
    this.dentistsService.getDentistsByFranchiseId().subscribe({
      next: (result: any) => {
        this.isLoadingDentist = false;
        this.dentistOptions = result;
        this.dentistFilteredOptions =
          this.procedureSchedulingForm.controls.dentistId.valueChanges.pipe(
            startWith(''),
            map((value) => this._filterDentists(value))
          );
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  displayFnDentist(dentist: Dentist): string {
    return dentist && dentist.name ? dentist.name : '';
  }

  getTreatmentsOptions() {
    this.treatmentsService.getTreatments(this.data.patientId).subscribe({
      next: (res: any) => {
        this.treatmentOptions = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  selectTreatment(treatment: any) {
    this.treatment = treatment;
  }

  selectTreatmentProcedure(treatmentProcedure: any) {
    this.selectedTreatmentProcedure = treatmentProcedure;
  }
}
