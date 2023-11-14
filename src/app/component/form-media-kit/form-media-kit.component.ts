import {Component, EventEmitter, Output} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from "@angular/forms";
import {MustMatch} from "../../helpers/MustMatchValidator";
import {MediakitService} from "../../services/mediakit.service";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-media-kit',
  templateUrl: './form-media-kit.component.html',
   styleUrls: ['./form-media-kit.component.scss'] // se você tiver um arquivo CSS
})
export class FormMediaKitComponent {

  @Output() submitEvent = new EventEmitter<boolean>();

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder,
              private router: Router,
              private mediaKitService: MediakitService,
              private storageService: StorageService) {}

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
this.mediaKitService.Create(this.mediaKitForm.value).subscribe(a=>{
  this.activeModal.close('Form submitted');
  this.submitEvent.emit(true);
},error => {

});
  }
}
