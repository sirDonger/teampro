import { Component, OnInit } from '@angular/core';
import { iVideo } from './../shared/_models/video.model';
import { CommonApiService } from './../shared/_services/common-api.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'xb-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: iVideo[];
  constructor(private commonApiService: CommonApiService, public ngxSmartModalService: NgxSmartModalService, ) { }

  ngOnInit() {
    this.commonApiService.getAllVideos().subscribe(res => this.videos = res);
  }

  loadPreview(src) {
    console.log('src', src);
    this.ngxSmartModalService.getModal('videoModal').open();
  }

}
