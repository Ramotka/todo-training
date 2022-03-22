import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
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
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    clientType: new FormControl(),
    info: new FormControl(),
    planFile: new FormControl(),
    checkbox: new FormControl(),
    room: new FormControl(),
  });

  constructor(
    @Inject(ADDS_FORM_DTO) private _addsFormDto: AddsFormDtoPort) {}

  onCreateFormSubmited(createForm: FormGroup): void {
    // if(createForm.invalid)
    // {
    //   return;
    // }
    this._addsFormDto.add(createForm.getRawValue());
    this.createForm.reset();
  }
}
