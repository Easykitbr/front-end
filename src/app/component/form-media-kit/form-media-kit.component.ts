import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from "@angular/forms";
import {MustMatch} from "../../helpers/MustMatchValidator";
import {MediakitService} from "../../services/mediakit.service";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";
import {GoogleService} from "../../services/google.service";


@Component({
  selector: 'app-form-media-kit',
  templateUrl: './form-media-kit.component.html',
   styleUrls: ['./form-media-kit.component.scss'] // se você tiver um arquivo CSS
})
export class FormMediaKitComponent implements OnInit{

  @Output() submitEvent = new EventEmitter<boolean>();
  passoAtual = 1;
  urlGoogle = '';
  @Input() mediaKitId :string='';
  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder,
              private router: Router,
              private mediaKitService: MediakitService,
              private storageService: StorageService,
              private googleService: GoogleService) {}

  // Avança para o próximo passo

  // Retorna para o passo anterior


  // Aqui você pode adicionar a lógica para lidar com a submissão dos dados do formulário
  mediaKitForm = this.fb.group({
    displayName: ['', [Validators.required, Validators.minLength(6)]],
    url: ['', [Validators.required, Validators.minLength(6)]],
    bio:['', [Validators.required, Validators.minLength(50)]]

  } );
  submit() {
    this.activeModal.close('Form submitted');
  }

  onSubmit() {
this.mediaKitService.Create(this.mediaKitForm.value).subscribe(kit=>{
  this.passoAtual = 2;
  this.mediaKitId = kit.id;
  this.googleService.GenerateUrl(kit.id).subscribe(url=>{this.urlGoogle = url;});
  //this.submitEvent.emit(true);
},error => {

});
  }

  ngOnInit(): void {
  }
}
