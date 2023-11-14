
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import {StorageService} from "./services/storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public chaveUsuarioLogado = 'usuarioLogado';

  constructor(private storageService: StorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    if(this.storageService.getItemLocalStorage(this.chaveUsuarioLogado)){

      let usuarioLogado = this.storageService.getUsuarioLogado();
      if(usuarioLogado != null){
        request = request.clone({
          setHeaders: {Authorization: `Bearer ${usuarioLogado.accessToken}`}
        });
      }

    }

    return next.handle(request).pipe(
      finalize(() => {

      })
    );
  }
}
