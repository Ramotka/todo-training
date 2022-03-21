import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormPage } from './form.page';
import { FormComponentModule } from '@form';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: FormPage,
        }
      ]),
    FormComponentModule
    ],
  	declarations: [FormPage],
  	providers: [],
  	exports: [] })
export class FormPageModule {
}
