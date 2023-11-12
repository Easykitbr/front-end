import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor (private route: ActivatedRoute) {
  }
  title = 'easykit-app';

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      // ...
    });
  }
  }
