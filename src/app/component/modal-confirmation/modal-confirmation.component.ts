import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss']
})
export class ModalConfirmationComponent {
  @Input() mensagemAlerta:string='';
  @Output() submitEvent = new EventEmitter<boolean>();
constructor(public activeModal: NgbActiveModal) {
}
  onSubmit() {
    this.activeModal.dismiss();
    this.submitEvent.emit(true);

  }
}
