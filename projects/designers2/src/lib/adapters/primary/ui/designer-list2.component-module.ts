import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignerList2Component } from './designer-list2.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule,RouterModule],
  	declarations: [DesignerList2Component],
  	providers: [],
  	exports: [DesignerList2Component] })
export class DesignerList2ComponentModule {
}
