import { Component, OnInit } from '@angular/core';
import { iVideo } from '../../shared/_models/video.model';
import { CommonApiService } from '../../shared/_services/common-api.service';
 

@Component({
  selector: 'xb-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: iVideo[];
  constructor(
    private commonApiService: CommonApiService, 
    ) { }

  ngOnInit() {
    this.commonApiService.getAllVideos().subscribe(res => this.videos = res);
  }
}
