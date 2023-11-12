import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from "./services/storage.service";
import {AuthService} from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class EstiverLogadoGuard implements CanActivate {

  constructor(
    private storageService: StorageService,
    private router: Router,
    private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let usuarioLogado = this.storageService.getUsuarioLogado();
    if (!usuarioLogado) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
