import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-count',
  templateUrl: './card-count.component.html',
  styleUrls: ['./card-count.component.scss']
})
export class CardCountComponent {
@Input() description: string='';
@Input() typeSocial: string='tiktok';
@Input() qtd: number=0;
@Input()classIcon: string='bi- bi-youtube';
}
