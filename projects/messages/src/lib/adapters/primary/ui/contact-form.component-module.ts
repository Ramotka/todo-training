import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';

@NgModule({ imports: [CommonModule],
  	declarations: [ContactFormComponent],
  	providers: [],
  	exports: [ContactFormComponent] })
export class ContactFormComponentModule {
}
