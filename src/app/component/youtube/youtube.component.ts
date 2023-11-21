import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ReturnGoogleDataDto} from "../../dtos/google/returnGoogleData.dto";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
  export class YoutubeComponent implements OnChanges{
  @Input()data!:ReturnGoogleDataDto;
  dataLabel:string[]=[]
  dataValue:number[]=[]
  dataLabelGenero: string[]=[];
  dataValueGenero: number[]=[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.data.ageGroup.map(a=>this.dataLabel.push(a[0].replace("age",'')))
      this.data.ageGroup.map(a=>this.dataValue.push(a[1]))

      this.data.genderSegmentation.map(a=>this.dataLabelGenero.push(a[0]))
      this.data.genderSegmentation.map(a=>this.dataValueGenero.push(a[1]))



      // Aqui você pode adicionar lógica adicional para lidar com a mudança
    }
    console.log(this.dataLabel)
    console.log(this.dataValue)

  }


}
