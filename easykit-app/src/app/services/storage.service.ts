import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';
import {ReturnUserDto} from "../dtos/users/returnUser.dto";

@Injectable({
  providedIn: 'root'
})
  export class StorageService {
    public chaveUsuarioLogado = 'usuarioLogado';
    public chaveUsuarioInfo = 'usuarioInfo';
    public tokenYoutube="youtube";

  setUsuarioLogado(user: ReturnUserDto): void {
    // Encrypt
    let userInfo = CryptoJS.AES.encrypt(JSON.stringify(user), environment.cryptoJSsecretKey).toString();

    this.setItemLocalStorage(this.chaveUsuarioLogado, userInfo);
  }
  getUsuarioLogado() {
    let userInfo = this.getItemLocalStorage(this.chaveUsuarioLogado);
    if(!userInfo){
      return null
    }
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(userInfo, environment.cryptoJSsecretKey);
    let objUserInfo = JSON.parse( bytes.toString(CryptoJS.enc.Utf8));

    return objUserInfo;
  }
  setYoutubeAcessToken(token:string){
    let tokenY = CryptoJS.AES.encrypt(JSON.stringify(token), environment.cryptoJSsecretKey).toString();

    this.setItemLocalStorage(this.tokenYoutube, tokenY);
  }
    getYoutubeAccessToken():string{
    let tokenYoutube = this.getItemLocalStorage(this.tokenYoutube);
    if(!tokenYoutube){
      return ''
    }
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(tokenYoutube, environment.cryptoJSsecretKey);
    return JSON.parse( bytes.toString(CryptoJS.enc.Utf8));
  }
  clearUsuarioLogado(): void {
    this.removeItemLocalStorage(this.chaveUsuarioLogado);
    this.removeItemLocalStorage(this.chaveUsuarioInfo);
  }

  clearUsuarioLogadoOnlyUser(): void {
    this.removeItemLocalStorage(this.chaveUsuarioLogado);
  }

  estaLogadoEConfirmado(): boolean {
    return this.getUsuarioLogado() != null;
  }

  // tslint:disable-next-line:no-any
  setJsonSessionStorage(key: string, value: any): void {
    this.setItemSessionStorage(key, JSON.stringify(value));
  }

  // tslint:disable-next-line:no-any
  setJsonLocalStorage(key: string, value: any): void {
    this.setItemLocalStorage(key, JSON.stringify(value));
  }

  setItemSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  setItemLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItemSessionStorage(key: string): string {
    return sessionStorage.getItem(key) as string;
  }

  getItemLocalStorage(key: string): string {
    return localStorage.getItem(key) as string;
  }

  // tslint:disable-next-line:no-any
  getJsonSessionStorage<T>(key: string): T {
    return JSON.parse(this.getItemSessionStorage(key)) as T;
  }

  // tslint:disable-next-line:no-any
  getJsonLocalStorage<T>(key: string): T {
    return JSON.parse(this.getItemLocalStorage(key)) as T;
  }

  removeItemSessionStorage(key: string): void {
    sessionStorage.removeItem(key);
  }

  removeItemLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  clearSessionStorage(): void {
    sessionStorage.clear();
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }

  clearStorage(): void {
    this.clearSessionStorage();
    this.clearLocalStorage();
  }
}
