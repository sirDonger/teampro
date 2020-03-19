import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'xb-servicedialogbox',
  templateUrl: './servicedialogbox.component.html',
  styleUrls: ['./servicedialogbox.component.scss']
})
export class ServicedialogboxComponent implements OnInit {

 
  constructor(
    public dialogRef: MatDialogRef<ServicedialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
