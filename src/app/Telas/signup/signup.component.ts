// signup.component.ts
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../services/user.service";
import {MustMatch} from "../../helpers/MustMatchValidator";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordconfirmation:  ['', [Validators.required]]
  }, { validators: MustMatch('password', 'passwordconfirmation') });
  ocorreuErro: boolean = false;
  mensagemErro: string =""
  ocorreuSucesso: boolean=false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) {}

  onSubmit() {
    if (this.signupForm.valid) {
    this.authService.Signup(this.signupForm.value).subscribe(value => {
    this.ocorreuSucesso = true;
    this.signupForm.reset()
      setTimeout(()=>{
        this.router.navigate(['/login']);
      },3000)

    },error => {
      console.log(error.error.message)
      this.ocorreuErro = true;
      this.mensagemErro = error.error.message;

      setTimeout(()=>{
this.ocorreuErro = false;
      },3000)

    })  ;
      // Aqui você pode enviar os dados para o backend
    }
  }
}
