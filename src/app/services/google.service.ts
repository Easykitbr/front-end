import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {environment} from "../../environments/environment";
import {ReturnGoogleDataDto} from "../dtos/google/returnGoogleData.dto";

@Injectable({
  providedIn: 'root'
})
export class GoogleService {


  private apiUrl = environment.apiUrl+"/google"

  constructor( private httpClient: HttpClient,private localStorageService : StorageService) { }

  GenerateUrl(id: any){
    return this.httpClient.get(`${this.apiUrl}/generateUrl/${id}`, { responseType: 'text' });
  }
  GetYoutubeData(tokenId: any){
    return this.httpClient.get<ReturnGoogleDataDto>(`${this.apiUrl}/youtubeData/${tokenId}`);
  }
}
