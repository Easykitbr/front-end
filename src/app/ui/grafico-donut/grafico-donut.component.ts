import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-grafico-donut',
  templateUrl: './grafico-donut.component.html',
  styleUrls: ['./grafico-donut.component.scss']
})

export class GraficoDonutComponent  implements OnChanges{
  @Input() labels!: string[];
  @Input() data!: number[];
  @Input() description: string="";


  dataUp = {
    labels: this.labels ,
    animations:{
      animateScale:true

    },
    datasets: [{
      label:this.description,
      data: this.data
    }]
  };


  ngOnChanges(changes: SimpleChanges): void {
    this.dataUp = {
      labels: this.labels  ,
      animations:{
        animateScale:true

      },
      datasets: [{
        label:this.description+"%",
        data: this.data
      }]
    };
  }


}
