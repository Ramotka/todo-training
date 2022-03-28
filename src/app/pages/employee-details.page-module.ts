import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EmployeeDetailsPage } from "./employee-details.page";
import { EmployeeDetail2ComponentModule, EmployeeIdResolverModule, FirebaseEmployees2ServiceModule } from "@designers2";
import { EmployeeIdResolver } from "projects/designers2/src/lib/adapters/primary/ui/employee-id.resolver";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ":employeeId",
        component: EmployeeDetailsPage,
        resolve: {
          employeeId: EmployeeIdResolver,
        }
      },
    ]),
    EmployeeDetail2ComponentModule,
    FirebaseEmployees2ServiceModule,
    EmployeeIdResolverModule,
  ],

  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailsPageModule {}
