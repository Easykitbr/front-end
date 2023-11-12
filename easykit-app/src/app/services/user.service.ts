import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UpdateUserDto} from "../dtos/users/updateUser.dto";
import {ReturnUserDto} from "../dtos/users/returnUser.dto";
import {CreateUserDto} from "../dtos/users/createUser.dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }
  Create(createUserDto: any){
    return this.httpClient.post<ReturnUserDto>(`${this.apiUrl}/users`,createUserDto);
  }
  Get(){
    return this.httpClient.get<ReturnUserDto[]>(`${this.apiUrl}/users`);
  }
  Delete(id: string){
    return this.httpClient.delete<string>(`${this.apiUrl}/users/${id}`);
  }
  UpdatePassword(id: string,updateUserDto: UpdateUserDto){
    return this.httpClient.put<string>(`${this.apiUrl}/users/${id}`,updateUserDto);
  }
}
