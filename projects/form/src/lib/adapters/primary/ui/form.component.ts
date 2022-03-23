import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  ADDS_FORM_DTO,
  AddsFormDtoPort,
} from "../../../application/ports/secondary/adds-form.dto-port";

@Component({
  selector: "lib-form",
  templateUrl: "./form.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  readonly createForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    clientType: new FormControl(null, [Validators.required]),
    info: new FormControl(null, [Validators.required]),
    planFile: new FormControl(null, [Validators.required]),
    checkbox: new FormControl(null, [Validators.required]),
    room: new FormControl(null, [Validators.required]),
  });

  constructor(
    @Inject(ADDS_FORM_DTO) private _addsFormDto: AddsFormDtoPort) {}

  onCreateFormSubmited(createForm: FormGroup): void {
    if(createForm.invalid)
    {
      alert('Uzupełnij brakujące pola / popraw email lub hasło (min. 8 znaków)!');
      return;
    }
    this._addsFormDto.add(createForm.getRawValue());
    this.createForm.reset();
  }
}
