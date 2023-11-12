import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
const googleLoginOptions: GoogleInitOptions = {
  oneTapEnabled: false, // default is true

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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    {

    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,

          provider: new GoogleLoginProvider('734364187428-ql46bgurnga50am51on38no788egkohm.apps.googleusercontent.com', googleLoginOptions),
        },
      ],
    } as SocialAuthServiceConfig,
  },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
