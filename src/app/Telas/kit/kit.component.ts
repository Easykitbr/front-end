import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MediakitService} from "../../services/mediakit.service";
import {ReturnMediaKitDto} from "../../dtos/mediakits/returnMediakit.dto";
import {TokenTypes} from "../../../enum/tokenTypes.enum";
import {GoogleService} from "../../services/google.service";
import {ReturnSocialTokenDto} from "../../dtos/tokens/returnSocialToken.dto";
import {ReturnGoogleDataDto} from "../../dtos/google/returnGoogleData.dto";

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.scss']
})
export class KitComponent implements OnInit{
youtubeData: ReturnGoogleDataDto;

  constructor(private route: ActivatedRoute,
              private googleService: GoogleService,
              private mediakitService: MediakitService) { }

  getGoogleToken(mediaKit: ReturnMediaKitDto): ReturnSocialTokenDto|undefined {
    return mediaKit.tokens?.find(token => token.tokenType === TokenTypes.Google);
  }
  ngOnInit(): void {
    const mediakit = this.route.snapshot.paramMap.get("mediakits")
    this.mediakitService.GetByUrl(mediakit).subscribe(kit=>{
const youtubeToken = this.getGoogleToken(kit);
      if (youtubeToken) {
        this.googleService.GetYoutubeData(youtubeToken.id).subscribe(a=>{
this.youtubeData = a;
            console.log(a)
        });
      } else {
        console.log("O objeto não tem um token do tipo Google");
      }

    });
  }

}
