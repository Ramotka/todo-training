import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [CreateEmployeeComponent],
  	providers: [],
  	exports: [CreateEmployeeComponent] })
export class CreateEmployeeComponentModule {
}
