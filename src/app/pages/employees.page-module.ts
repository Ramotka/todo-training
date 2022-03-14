import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import { DesignersListComponentModule } from '@designers';

@NgModule({ imports: [CommonModule, DesignersListComponentModule,
      RouterModule.forChild([
        {
          path: '',
          component: EmployeesPage,
        }
      ]),
  DesignersListComponentModule
],
  	declarations: [EmployeesPage],
  	providers: [],
  	exports: [] })
export class EmployeesPageModule {
}
