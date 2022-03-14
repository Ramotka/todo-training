import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { DesignersListComponentModule } from '@designers';

@NgModule({ imports: [CommonModule, DesignersListComponentModule,
      RouterModule.forChild([
        {
          path: '',
          component: AboutUsPage,
        }
      ]),
  DesignersListComponentModule,
],
  	declarations: [AboutUsPage],
  	providers: [],
  	exports: [] })
export class AboutUsPageModule {
}
