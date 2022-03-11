import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({ selector: 'lib-contact-form', templateUrl: './contact-form.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactFormComponent {
    contact = "Hello contact";
    
    onClick() {
        alert("Zadzwoń!!!")
        this.contact = "tel. 123-456-789"
    }

}
