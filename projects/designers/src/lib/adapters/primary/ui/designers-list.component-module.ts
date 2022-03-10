import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignersListComponent } from './designers-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [DesignersListComponent],
  	providers: [],
  	exports: [DesignersListComponent] })
export class DesignersListComponentModule {
}
