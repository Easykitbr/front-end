import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ReturnUserDto} from "../dtos/users/returnUser.dto";
import {ReturnMediaKitDto} from "../dtos/mediakits/returnMediakit.dto";

@Injectable({
  providedIn: 'root'
})
export class MediakitService {


    private apiUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }
  Create(createMediakitDto: any){
    return this.httpClient.post<any>(`${this.apiUrl}/mediakits`,createMediakitDto);
  }
  GetByUrl(url:string|null){
    return this.httpClient.get<ReturnMediaKitDto>(`${this.apiUrl}/mediakits/kit/${url}`);
  }
  Delete(id:string){
    return this.httpClient.delete<any>(`${this.apiUrl}/mediakits/${id}`);
  }
  Update(id:string,createMediakitDto: any){
    return this.httpClient.put<any>(`${this.apiUrl}/mediakits/${id}`,createMediakitDto);
  }
   ListAll(){
    return this.httpClient.get<any>(`${this.apiUrl}/mediakits/all`);
  }
}
