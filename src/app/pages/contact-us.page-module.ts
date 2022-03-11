import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactUsPage } from './contact-us.page';
import { ContactFormComponentModule } from '../../../projects/messages/src/lib/adapters/primary/ui/contact-form.component-module';

@NgModule({ imports: [CommonModule, 
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
