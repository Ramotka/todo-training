import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee.component';

@NgModule({ imports: [CommonModule],
  	declarations: [CreateEmployeeComponent],
  	providers: [],
  	exports: [CreateEmployeeComponent] })
export class CreateEmployeeComponentModule {
}
