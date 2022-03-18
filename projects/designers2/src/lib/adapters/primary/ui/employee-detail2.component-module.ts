import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetail2Component } from './employee-detail2.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule,
	RouterModule.forChild([
		{
		  path: '',
		  component: EmployeeDetail2Component,
		}
	  ])],
  	declarations: [EmployeeDetail2Component],
  	providers: [],
  	exports: [EmployeeDetail2Component] })
export class EmployeeDetail2ComponentModule {
}
