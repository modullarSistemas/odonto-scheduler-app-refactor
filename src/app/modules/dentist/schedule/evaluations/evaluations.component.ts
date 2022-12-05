import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { EvaluationScheduling } from 'src/app/shared/models/EvaluationScheduling';
import { routes } from 'src/app/shared/models/routes';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ScheduleService } from 'src/app/shared/services/schedule.service';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {
  public routes: typeof routes = routes;
  schedulings: EvaluationScheduling[] = [];
  dayDate = new Date();
  isLoading = false;

  last30DaysSchedulings: any = <any>[];
  last7DaysSchedulings: any = <any>[];
  daySchedulings: any = <any>[];
  next7DaysSchedulings: any = <any>[];
  next30DaysSchedulings: any = <any>[];


  boundedGetEvaluatinosScheduling = this.getEvaluationsScheduling.bind(this);

  constructor(
    private scheduleService: ScheduleService,
    private authService: AuthService,
    public dialog: MatDialog
    ) {
   }

  ngOnInit(): void {
    //get by date from scheduling array
    //get by date range from scheduling array
    this.getEvaluationsScheduling();
  }

  getEvaluationsScheduling() {
    this.isLoading = true;
    this.scheduleService.getEvaluationsScheduling(this.authService.getFranchiseId()).subscribe({
      next: res => {
        this.schedulings = res as EvaluationScheduling[];
        this.getDayEvaluationScheduling();
        this.getNext7DaysSchedulings();
        this.getNext30DaysSchedulings();
        this.getLast7DaysSchedulings();
        this.getLast30DaysSchedulings();
        this.isLoading = false;

      },
      error: error => {
        this.isLoading = false;
      }
    });
  }

  getDayEvaluationScheduling() {
    let schedulings: any = [];
    this.schedulings.forEach( scheduling => {
        if(moment(scheduling.startDate).isSame(this.dayDate, 'day') ) {
          schedulings.push(scheduling);
        }
    });
    this.daySchedulings = this.buildCalendar(schedulings);
  }

  getNext7DaysSchedulings() {
    let startDate = new Date();
    let endDate = moment(startDate).add(7, "days").toDate();

    let schedulings: any = [];
    this.schedulings.forEach( scheduling => {
      if(moment(scheduling.startDate).isBetween(startDate, endDate)) {
        schedulings.push(scheduling);
      }
    });

    this.next7DaysSchedulings = this.buildCalendar(schedulings);
  }

  getNext30DaysSchedulings() {
    let startDate = new Date();
    let endDate = moment(startDate).add(30, "days").toDate();

    let schedulings: any = [];
    this.schedulings.forEach( scheduling => {
      if(moment(scheduling.startDate).isBetween(startDate, endDate)) {
        schedulings.push(scheduling);
      }
    });

    this.next30DaysSchedulings = this.buildCalendar(schedulings);
  }

  getLast7DaysSchedulings() {
    let startDate = new Date();
    let endDate = moment(startDate).subtract(7, "days").toDate();
    let schedulings: any = [];
    this.schedulings.forEach( scheduling => {
      if(moment(scheduling.startDate).isBetween(endDate, startDate)) {
        schedulings.push(scheduling);
      }
    });

    this.last7DaysSchedulings = this.buildCalendar(schedulings);
  }

  getLast30DaysSchedulings() {
    let startDate = new Date();
    let endDate = moment(startDate).subtract(30, "days").toDate();

    let schedulings: any = [];
    this.schedulings.forEach( scheduling => {
      if(moment(scheduling.startDate).isBetween(endDate, startDate)) {
        schedulings.push(scheduling);
      }
    });

    this.last30DaysSchedulings = this.buildCalendar(schedulings);
  }

  buildCalendar(schedulings: any) {

    let calendar: any = [];
    schedulings.forEach( (event: any) => {
      let date = new Date(event.startDate);

      let formattedDate;
      if(date.getMonth() >= 10)
        formattedDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
      else
        formattedDate = date.getDate() + "/0" + (date.getMonth() + 1) + "/" + date.getFullYear();

      let calendarItem = calendar[formattedDate];
      if(!calendarItem) {
        calendarItem = {
          formattedDate: formattedDate,
          date: new Date(event.startDate),
          events: []
        };
      }
      calendarItem.events.push(event);
      calendar[formattedDate] = calendarItem;
    });

    var result = Object.entries(calendar);
    result = result.sort(function(a: any, b: any){
      const date1: any = new Date(a[1].date)
      const date2: any = new Date(b[1].date)
      return date1 - date2;
    });

    calendar = result.reverse();

    return calendar;
  }

}
