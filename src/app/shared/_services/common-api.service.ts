import { VideoMockData, iVideo } from './../_models/video.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  constructor() { }

  getAllVideos() {
    var videosList: iVideo[] = VideoMockData;
    console.log(' videosList ', videosList);
    return of(videosList);

  }


}
