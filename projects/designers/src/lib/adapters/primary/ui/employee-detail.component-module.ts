import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailComponent } from './employee-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, 
	RouterModule.forChild([
	  {
		path: '',
		component: EmployeeDetailComponent,
	  }
	])],
  	declarations: [EmployeeDetailComponent],
  	providers: [],
  	exports: [EmployeeDetailComponent] })
export class EmployeeDetailComponentModule {
}



