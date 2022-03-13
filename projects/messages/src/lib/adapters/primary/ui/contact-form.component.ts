import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-contact-form', templateUrl: './contact-form.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactFormComponent {
    contact = "Zadzwoń";
    contact2 = "";
  readonly kontakt: FormGroup = new FormGroup({email: new FormControl(), imie: new FormControl()});

    onClick() {
        this.contact = "tel: +48 123-456-789";
    };
    submit(kontakt:FormGroup) {
        alert(kontakt.get("email").value + ' ' + kontakt.get("imie").value);
        this.contact2 = kontakt.get("email").value + ' ' + kontakt.get("imie").value;

    };
    // onFormSubmited(kontakt: FormGroup): void {
    //     console.log(kontakt.getRawValue());
    // }

}
