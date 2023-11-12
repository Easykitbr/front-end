import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./Telas/main/main.component";
import {MasterpageComponent} from "./Telas/masterpage/masterpage.component";
import {LoginComponent} from "./Telas/login/login.component";
import {KitComponent} from "./Telas/kit/kit.component";
import {SignupComponent} from "./Telas/signup/signup.component";
import {EstiverLogadoGuard} from "./estiver-logado.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'kit/:mediakit', component: KitComponent,canActivate: [EstiverLogadoGuard] },
  { path: 'main', component: MainComponent },
  {
  path: '',
  component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
