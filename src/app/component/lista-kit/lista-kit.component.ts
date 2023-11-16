import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormMediaKitComponent} from "../form-media-kit/form-media-kit.component";
import {MediakitService} from "../../services/mediakit.service";
import {GoogleService} from "../../services/google.service";
import {Router} from "@angular/router";

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
      this.googleService.GenerateUrl(kit.id).subscribe(a=>{kit.urlGoogle = a;});

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
        console.log('Popup fechada');
        // Executar ações após o fechamento da popup
      }
    }, 1000);
  }

  RedirectTo(url:string) {
    this.router.navigate(['kit/'+url])
  }
}
