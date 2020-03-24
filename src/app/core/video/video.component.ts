import { VideoDialogboxComponent } from './video-dialogbox/video-dialogbox.component';
import { iVideo } from './../../shared/_models/video.model';
 
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'xb-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  
  @Input() video: iVideo;
  @Input() showTitle: boolean;
   

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  // load preview of the video in a popup modal box. 
  loadPreview() {
    if ( this.video.url !== ''){
       this.dialog.open(VideoDialogboxComponent, {data: this.video.url});
    }
  }


}
