import { ApiService } from 'src/app/shared/_services/api.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'xb-calendar-dialogbox',
  templateUrl: './calendar-dialogbox.component.html',
  styleUrls: ['./calendar-dialogbox.component.scss']
})

export class CalendarDialogboxComponent implements OnInit {
  successUpdated: boolean;
  constructor(
    public dialogRef: MatDialogRef<CalendarDialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public eventData,
    private apiService: ApiService) { }

  ngOnInit() {
  }

  updateEvent(eventData, selectedOption){
      this.apiService.updateEventStatus(eventData,selectedOption.value).subscribe(response =>  {
        this.successUpdated = response; 
        setTimeout(()=>{    
          this.successUpdated = false;
        }, 3000);

      });
  }

}
