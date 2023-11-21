import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormMediaKitComponent} from "../form-media-kit/form-media-kit.component";
import {MediakitService} from "../../services/mediakit.service";
import {GoogleService} from "../../services/google.service";
import {Router} from "@angular/router";
import {ModalConfirmationComponent} from "../modal-confirmation/modal-confirmation.component";

@Component({
  selector: 'app-lista-kit',
  templateUrl: './lista-kit.component.html',
  styleUrls: ['./lista-kit.component.scss']
})
export class ListaKitComponent implements OnInit{
  listaKit!: any[];

  constructor(private modalService: NgbModal,
              private kitsService: MediakitService,
              private googleService: GoogleService,
              private router: Router) {
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
    this.listaKit.forEach((kit)=>{

    });
  })
}
  ngOnInit(): void {
this.carregalista()
  }

  openPopup(url:string) {
       const popup = window.open(url, "Popup", "width=600,height=400");

    const interval = setInterval(() => {
      if (popup?.closed) {
        clearInterval(interval);
      }
    }, 1000);
  }

  RedirectTo(url:string) {
    this.router.navigate(['kit/'+url])
  }

  DeletarKit(id:string) {
    const modalRef = this.modalService.open(ModalConfirmationComponent);
    modalRef.componentInstance.mensagemAlerta = "Deseja realmente remover o seu EasyKit?"
    modalRef.componentInstance.submitEvent.subscribe((d:boolean) => {
      if (d){ this.kitsService.Delete(id).subscribe(a=>{

        this.carregalista()
      });

      }
      // Faça algo com os dados do evento
    });

  }
}
