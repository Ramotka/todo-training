import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { DesignersListComponentModule } from '../../../projects/designers/src/lib/adapters/primary/ui/designers-list.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  DesignersListComponentModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
