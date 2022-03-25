import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EmployeeDetailsPage } from "./employee-details.page";
import { EmployeeDetail2ComponentModule, FirebaseEmployees2ServiceModule } from "@designers2";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ":employeeId",
        component: EmployeeDetailsPage,
      },
    ]),
    EmployeeDetail2ComponentModule,
    FirebaseEmployees2ServiceModule,
  ],

  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailsPageModule {}
