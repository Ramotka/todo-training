import { Alert } from "selenium-webdriver";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ADDS_MESSAGE_DTO, AddsMessageDtoPort } from '../../../application/ports/secondary/adds-message.dto-port';

@Component({
  selector: "lib-contact-form",
  templateUrl: "./contact-form.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  contact = "Zadzwoń";
  contact2 = "";
  readonly createMessage: FormGroup = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
    text: new FormControl(),
  });

  onClick() {
    this.contact = "tel: +48 123-456-789";
  }
  // submit(kontakt: FormGroup) {
  //   alert(kontakt.get("email").value + " " + kontakt.get("imie").value);
  //   this.contact2 =
  //     kontakt.get("email").value + " " + kontakt.get("imie").value;
  // }
  // onFormSubmited(kontakt: FormGroup): void {
  //     console.log(kontakt.getRawValue());
  // }
  constructor(@Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort) {
  }

  onCreateMessageSubmited(createMessage: FormGroup): void {
      if(createMessage.invalid)
  {
    return;
  }
    alert("Udało się!");
      this.contact2 = "Dziękujemy za przesłaną wiadomość."
        
    this._addsMessageDto.add(createMessage.getRawValue());
    this.createMessage.reset();
  }
}
