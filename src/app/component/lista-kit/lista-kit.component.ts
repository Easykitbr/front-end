import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormMediaKitComponent} from "../form-media-kit/form-media-kit.component";
import {MediakitService} from "../../services/mediakit.service";

@Component({
  selector: 'app-lista-kit',
  templateUrl: './lista-kit.component.html',
  styleUrls: ['./lista-kit.component.scss']
})
export class ListaKitComponent implements OnInit{
  listaKit!: any[];

  constructor(private modalService: NgbModal,
              private kitsService: MediakitService) {
  }
  openModal() {
    const modalRef = this.modalService.open(FormMediaKitComponent);
    modalRef.componentInstance.submitEvent.subscribe((d:boolean) => {
      if (d){
        this.carregalista()
      }
      // Faça algo com os dados do evento
    });
  }
carregalista(){
  this.kitsService.ListAll().subscribe(a=>{
    this.listaKit = a;
  })
}
  ngOnInit(): void {
this.carregalista()
  }
}
