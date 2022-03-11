import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [ContactFormComponent],
  	providers: [],
  	exports: [ContactFormComponent] })
export class ContactFormComponentModule {
}
