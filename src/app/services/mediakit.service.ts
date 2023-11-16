import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ReturnUserDto} from "../dtos/users/returnUser.dto";

@Injectable({
  providedIn: 'root'
})
export class MediakitService {


    private apiUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }
  Create(createMediakitDto: any){
    return this.httpClient.post<any>(`${this.apiUrl}/mediakits`,createMediakitDto);
  }
  ListAll(){
    return this.httpClient.get<any>(`${this.apiUrl}/mediakits/all`);
  }
}
