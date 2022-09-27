import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/models/Patient';
import { Treatment } from 'src/app/shared/models/Treatment';
import { PatientsService } from 'src/app/shared/services/patients.service';
import { TreatmentsService } from 'src/app/shared/services/treatments.service';
import { CreateEvalutionSchedulingDialogComponent } from './components/create-evalution-scheduling-dialog/create-evalution-scheduling-dialog.component';
import { CreateProcedureSchedulingDialogComponent } from './components/create-procedure-scheduling-dialog/create-procedure-scheduling-dialog.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientId: any;
  patient?: Patient;
  treatments?: Treatment[];

  constructor(
    public patientsService: PatientsService,
    public treatmentsService: TreatmentsService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar

  ) {
    this.patientId = this.route.snapshot.paramMap.get('id');
    this.getPatient();
    this.getTreatments();
  }

  ngOnInit(): void {
  }

  getPatient() {
    this.patientsService.getPatient(this.patientId).subscribe({
      next: (res: any) => {
        this.patient = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getTreatments() {
    this.treatmentsService.getTreatments(this.patientId).subscribe({
      next: (res: any) => {
        this.treatments = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  openCreateEvaluationSchedulingDialog() {
    const dialogRef = this.dialog.open(CreateEvalutionSchedulingDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {patientId: this.patientId},
    });

    dialogRef.afterClosed().subscribe((result) => {

    });
  }

  openCreateProcedureSchedulingDialog() {
    const dialogRef = this.dialog.open(CreateProcedureSchedulingDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {patientId: this.patientId},
    });

    dialogRef.afterClosed().subscribe((result) => {

    });
  }

}
