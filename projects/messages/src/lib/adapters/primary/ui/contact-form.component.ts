import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-contact-form', templateUrl: './contact-form.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactFormComponent {
    contact = "Hello contact";
  readonly kontakt: FormGroup = new FormGroup({email: new FormControl(), imie: new FormControl()});

    onClick() {
        alert("Zadzwoń!!!");
        this.contact = "tel. 123-456-789";
    }
    submit(kontakt:FormGroup) {
        this.contact = kontakt.get("email").value;

    }
    

}
