import { Component } from '@angular/core';

@Component({
  selector: 'app-tiktok-auth',
  templateUrl: './tiktok-auth.component.html',
  styleUrls: ['./tiktok-auth.component.scss']
})
export class TiktokAuthComponent {

  // Defina seu client_id aqui
  clientId: string = 'awr41xe0e6zmsofj';

  // URL de autorização do TikTok
  authUrl: string = `https://open-api.tiktok.com/platform/oauth/connect/?client_key=${this.clientId}&response_type=code&redirect_uri=https://easykit.com.br/&scope=user.info.basic,video.list.draft`;

  authorizeTikTok() {
    window.location.href = this.authUrl;
  }
}
