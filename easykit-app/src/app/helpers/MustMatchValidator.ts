import { FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      // Retorna se algum outro validador já encontrou um erro no matchingControl
      return;
    }

    // Define o erro no matchingControl se a validação falhar
    if (control.value !== matchingControl.value) {

      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
