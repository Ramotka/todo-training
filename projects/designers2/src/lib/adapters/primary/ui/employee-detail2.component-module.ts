import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetail2Component } from './employee-detail2.component';
import { RouterModule } from '@angular/router';
import { FirebaseEmployees2ServiceModule } from '../../secondary/infrastructure/firebase-employees2.service-module';

@NgModule({ imports: [CommonModule, FirebaseEmployees2ServiceModule,
	RouterModule.forChild([
		{
		  path: '',
		  component: EmployeeDetail2Component,
		}
	  ])
],
  	declarations: [EmployeeDetail2Component],
  	providers: [],
  	exports: [EmployeeDetail2Component] })
export class EmployeeDetail2ComponentModule {
}
