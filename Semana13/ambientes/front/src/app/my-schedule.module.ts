import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SCHEDULE
import {
  ScheduleModule,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  MonthAgendaService,
  TimelineViewsService,
  TimelineMonthService
} from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScheduleModule
  ],
  exports: [
    ScheduleModule
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    TimelineMonthService
  ]
})
export class MyScheduleModule { }
