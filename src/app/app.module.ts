import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './Telas/main/main.component';
import { TiktokComponent } from './component/tiktok/tiktok.component';
import { InstagramComponent } from './component/instagram/instagram.component';
import { YoutubeComponent } from './component/youtube/youtube.component';
import { MasterpageComponent } from './Telas/masterpage/masterpage.component';
import { LoginComponent } from './Telas/login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './ui/footer/footer.component';
import { TopbarComponent } from './ui/topbar/topbar.component';
import { KitComponent } from './Telas/kit/kit.component';
import { CardCountComponent } from './ui/card-count/card-count.component';
import { FormatNumberPipe } from './format-number.pipe';
import { TiktokAuthComponent } from './auth/tiktok-auth/tiktok-auth.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  SocialLoginModule,
  SocialAuthServiceConfig, GoogleSigninButtonModule, GoogleInitOptions,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { SignupComponent } from './Telas/signup/signup.component';
import { ListaKitComponent } from './component/lista-kit/lista-kit.component';
import { FormMediaKitComponent } from './component/form-media-kit/form-media-kit.component';
import {AuthInterceptor} from "./auth-interceptor.interceptor";
import { ModalConfirmationComponent } from './component/modal-confirmation/modal-confirmation.component';
import { GraficoDonutComponent } from './ui/grafico-donut/grafico-donut.component';
const googleLoginOptions: GoogleInitOptions = {
  oneTapEnabled: false,
  scopes: ['email','profile','https://www.googleapis.com/auth/yt-analytics.readonly']
};
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TiktokComponent,
    InstagramComponent,
    YoutubeComponent,
    MasterpageComponent,
    LoginComponent,
    FooterComponent,
    TopbarComponent,
    KitComponent,
    CardCountComponent,
    FormatNumberPipe,
    TiktokAuthComponent,
    SignupComponent,
    ListaKitComponent,
    FormMediaKitComponent,
    ModalConfirmationComponent,
    GraficoDonutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartjsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    {

    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,

          provider: new GoogleLoginProvider('818528893882-nc0mu503ivl6nsbjje2p8sldshfuttls.apps.googleusercontent.com', googleLoginOptions),
        },
      ],
    } as SocialAuthServiceConfig,
  },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
