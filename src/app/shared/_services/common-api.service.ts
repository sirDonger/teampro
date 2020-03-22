import { VideoMockData, iVideo } from './../_models/video.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BlogMockData, iBlog } from './../_models/blog.model';


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

  getAllBlogs() {
    var blogsList: iBlog[] = BlogMockData;
    console.log(' blogsList ', blogsList);
    return of(blogsList);
  }


}
