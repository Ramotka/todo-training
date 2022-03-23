import { Alert } from "selenium-webdriver";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    email: new FormControl(null, [Validators.required, Validators.email]),
    name: new FormControl(null, [Validators.required]),
    text: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
  });

  onClick() {
    this.contact = "tel: +48 123-456-789";
  }

  constructor(@Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort) {
  }

  onCreateMessageSubmited(createMessage: FormGroup): void {
      if(createMessage.invalid)
  {
    alert('Uzupełnij brakujące pola lub popraw email!')
    return;
  }
    alert('Udało się!');
      this.contact2 = "Dziękujemy za przesłaną wiadomość."
        
    this._addsMessageDto.add({
      name: createMessage.get('name').value,
      email: createMessage.get('email').value,
      text: createMessage.get('text').value,
    });
    this.createMessage.reset();
  }
}


// this._addsMessageDto.add(createMessage.getRawValue());


  // submit(kontakt: FormGroup) {
  //   alert(kontakt.get("email").value + " " + kontakt.get("imie").value);
  //   this.contact2 =
  //     kontakt.get("email").value + " " + kontakt.get("imie").value;
  // }
  // onFormSubmited(kontakt: FormGroup): void {
  //     console.log(kontakt.getRawValue());
  // }