import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ScheduleService } from 'src/app/shared/services/schedule.service';

@Component({
  selector: 'app-create-evalution-scheduling-dialog',
  templateUrl: './create-evalution-scheduling-dialog.component.html',
  styleUrls: ['./create-evalution-scheduling-dialog.component.css']
})
export class CreateEvalutionSchedulingDialogComponent implements OnInit {

  isLoading = false;
  evaluationSchedulingForm: FormGroup | any;
  @ViewChild('picker') picker: any;

  constructor(
    private snackBar: MatSnackBar,
    private scheduleService: ScheduleService,
    public authService: AuthService,
    public dialogRef: MatDialogRef<CreateEvalutionSchedulingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    let user: any = this.authService.getUser();
    this.evaluationSchedulingForm = new FormGroup({
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl(new Date()),
      scheduledBy: new FormControl(user.userId),
      franchiseId: new FormControl(user.franchiseId),
      description: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  createEvaluationScheduling() {
    this.isLoading = true;
    let data = this.evaluationSchedulingForm.value;
    data.startDate = moment(data.startDate).toDate();
    data.endDate = moment(data.startDate).add(60, 'm').toDate();

    this.scheduleService.createEvaluationScheduling(data).subscribe({
      next: res => {
        this.isLoading = false;
        this.dialogRef.close();
        const snackBarRef = this.snackBar.open('Nova avaliacao agendada!', 'Ok', {duration: 2000, panelClass: 'blue-snackbar'});
        snackBarRef.afterDismissed().subscribe(info => {

        });

      },
      error: error => {
        console.log(error);
      }
    })

  }
}
