import { iMyEvent, iEventColors } from './../../../../shared/_models/event.model';
import { CalendarDialogboxComponent } from './../calendar-dialogbox/calendar-dialogbox.component';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { ApiService } from 'src/app/shared/_services/api.service'; 
import { User } from 'src/app/shared/_models/user.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'xb-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'] 
})

export class CalendarComponent implements OnInit {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;
  viewDate: Date = new Date();
  modalData: {
    event: CalendarEvent;
  };
  refresh: Subject<any> = new Subject();
  events: iMyEvent[]  = [];
  activeDayIsOpen: boolean = true;

  users: User[];
  constructor(
    public dialog: MatDialog,
    private apiService: ApiService, 
  ) { }

  ngOnInit() {
    this.apiService.getAllCalendarEvents().subscribe(response => this.events = response);
    this.apiService.getAllUsers().subscribe(response => this.users = response);
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(' dayClicked ');
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log("clicked", event);
    this.modalData = { event };
    console.log("data", this.modalData.event.title);
    this.dialog.open(CalendarDialogboxComponent, {data: event});
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        description: 'Description of New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: iEventColors.meeting,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  editEvent(event, option) {
    console.log('editEvent', event);
    console.log('option', option);
    this.apiService.editEvent(event);
  }


}
