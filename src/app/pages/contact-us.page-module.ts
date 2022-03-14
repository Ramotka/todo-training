import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactUsPage } from './contact-us.page';
import { ContactFormComponentModule } from '@messages';

@NgModule({ imports: [CommonModule, ContactFormComponentModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ContactUsPage,
        }
      ]),
  ContactFormComponentModule
],
  	declarations: [ContactUsPage],
  	providers: [],
  	exports: [] })
export class ContactUsPageModule {
}
