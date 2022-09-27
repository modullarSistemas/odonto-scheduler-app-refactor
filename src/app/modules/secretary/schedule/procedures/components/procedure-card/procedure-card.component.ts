import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SchedulingStatusEnum } from 'src/app/shared/enums/SchedulingStatusEnum';
import { ScheduleService } from 'src/app/shared/services/schedule.service';

@Component({
  selector: 'app-procedure-card',
  templateUrl: './procedure-card.component.html',
  styleUrls: ['./procedure-card.component.css']
})
export class ProcedureCardComponent implements OnInit {

  @Input() scheduling: any;
  @Input() updateSchedulings: any;
  isLoading = false;

  constructor(
    private scheduleService: ScheduleService,
    private snackBar: MatSnackBar,
    ) {  }

  ngOnInit(): void { }

  updateSchedulingStatusPresence() {
    this.isLoading = true;
    this.scheduleService.updateProcedureSchedulingStatus(this.scheduling.id, SchedulingStatusEnum.Presence).subscribe({
      next: (res) => {
        this.isLoading = false;
        const snackBarRef = this.snackBar.open('Presenca confirmada!', 'Ok', {duration: 2000, panelClass: 'blue-snackbar'});
        snackBarRef.afterDismissed().subscribe(info => {
          this.updateSchedulings();
        });
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  updateSchedulingStatusAbsence() {
    this.isLoading = true;
    this.scheduleService.updateProcedureSchedulingStatus(this.scheduling.id, SchedulingStatusEnum.Absent).subscribe({
      next: (res) => {
        this.isLoading = false;
        const snackBarRef = this.snackBar.open('Ausencia confirmada!', 'Ok', {duration: 2000, panelClass: 'blue-snackbar'});
        snackBarRef.afterDismissed().subscribe(info => {
          this.updateSchedulings();
        });
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  updateSchedulingStatusConfirmed() {
    this.isLoading = true;
    this.scheduleService.updateProcedureSchedulingStatus(this.scheduling.id, SchedulingStatusEnum.Confirmed).subscribe({
      next: (res) => {
        this.isLoading = false;
        const snackBarRef = this.snackBar.open('Agendamento finalizado!', 'Ok', {duration: 2000, panelClass: 'blue-snackbar'});
        snackBarRef.afterDismissed().subscribe(info => {
          this.updateSchedulings();
        });
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
