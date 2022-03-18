import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EmployeesPage } from "./employees.page";
import { DesignerList2ComponentModule } from '@designers2';
import { FirebaseEmployees2ServiceModule } from '../../../projects/designers2/src/lib/adapters/secondary/infrastructure/firebase-employees2.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: EmployeesPage,
      },
    ]),
    DesignerList2ComponentModule,
    FirebaseEmployees2ServiceModule
  ],
  declarations: [EmployeesPage],
  providers: [],
  exports: [],
})
export class EmployeesPageModule {}
