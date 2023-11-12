import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LoginDto} from "../dtos/auth/login.dto";
import {TokensDto} from "../dtos/auth/tokens.dto";
import {CreateUserDto} from "../dtos/users/createUser.dto";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  login(loginDto: LoginDto){
    return this.httpClient.post<TokensDto>(`${this.apiUrl}/auth/login`,loginDto);
  }
  Signup(createUserDto: CreateUserDto){
    return this.httpClient.post<TokensDto>(`${this.apiUrl}/auth/sign-up`,createUserDto);

  }
  Logout(){
    return this.httpClient.get<string>(`${this.apiUrl}/auth/logout`);

  }
  Refresh(){
    return this.httpClient.get<TokensDto>(`${this.apiUrl}/auth/refresh`);
  }

}
