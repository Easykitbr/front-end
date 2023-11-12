import {Component, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";
import {StorageService} from "../../services/storage.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-masterpage',
  templateUrl: './masterpage.component.html',
  styleUrls: ['./masterpage.component.scss']
})
export class MasterpageComponent implements OnInit {
  parametro!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("teste")
    this.route.params.subscribe(params => {
      this.parametro = params['mediakit'];
      console.log(params)
      console.log(234)
      // Agora você pode usar o parâmetro como desejar
    });
  }
}
