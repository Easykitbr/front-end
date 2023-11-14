import {Component, OnInit} from '@angular/core';
import {GoogleInitOptions, GoogleLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";
import {StorageService} from "../../services/storage.service";
import {YoutubeService} from "../../services/youtube.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormMediaKitComponent} from "../../component/form-media-kit/form-media-kit.component";
const googleLoginOptions: GoogleInitOptions = {
  oneTapEnabled: false, // default is true
  scopes: 'https://www.googleapis.com/auth/yt-analytics.readonly'
}; // https://developers.google.com/identity/oauth2/web/guides/use-token-model#initialize_a_token_client

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  private accessTokenYoutube = ''
  youtubeConectado: boolean=false;
  constructor(private socialAuthService: SocialAuthService,
              private localStorageService: StorageService,
              private youtubeService : YoutubeService,
              private modalService: NgbModal
              ) {
  }
  openModal() {
    const modalRef = this.modalService.open(FormMediaKitComponent);
    // ...
  }
  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
     console.log(user)
    });
    }
 youtubeIntegration(){
    this.socialAuthService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(a=>{
      this.youtubeConectado = true;
      console.log(a)
    })
  }
}
