import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { CreateEmployeeComponentModule } from '@designers2';
import { FirebaseEmployees2ServiceModule } from '@designers2';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AdminPage,
        }
      ]),
  CreateEmployeeComponentModule,
  FirebaseEmployees2ServiceModule
],
  	declarations: [AdminPage],
  	providers: [],
  	exports: [] })
export class AdminPageModule {
}
