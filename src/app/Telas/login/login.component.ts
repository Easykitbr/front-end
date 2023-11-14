import {Component, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";
import {LoginDto} from "../../dtos/auth/login.dto";
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";
/// <reference types="gapi.auth2" />
/// <reference types="gapi" />

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';

  private accessToken = '';
  senhaInvalida: boolean=false;
constructor(private authService: AuthService,
            private router: Router,
    private  storageService: StorageService,
    private socialAuthService: SocialAuthService) {
    // @ts-ignore

}
  onSubmit(): void {
   let loginDto = new LoginDto();
   loginDto.email = this.username;
   loginDto.password = this.password;
   console.log(loginDto)
this.authService.login(loginDto).subscribe(a=>{
  console.log(a)
  this.storageService.setUsuarioLogado(a)
  this.router.navigate(['/main'])
},error => {this.senhaInvalida=true})
  }
  ngOnInit(): void {
  }

  IrSignUp() {
    this.router.navigate(['/signup']);
  }
}
