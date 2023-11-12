import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor( private httpClient: HttpClient,private localStorageService : StorageService) { }

  GetBasicInfo(){
    return this.httpClient
        .get('https://youtubeanalytics.googleapis.com/v2/reports?metrics=subscribersGained,views,&ids=channel==MINE&startDate=2000-01-01&endDate=2023-11-03', {
          headers: { Authorization: `Bearer ${this.localStorageService.getYoutubeAccessToken()}` },
        })

  }
  Authorize(){
    return this.httpClient
      .get('http://localhost:3000',{headers:{'Access-Control-Allow-Origin': '*'}})

  }
    Getnumberofviews(){
        return this.httpClient
            .get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC4yiH49K3_OGdHMaOI3JSQw&key=AIzaSyAvBBPPMiXcgKn9wBEQNNVODjoGoh6pxe8', )

    }

}
