import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsPageModule } from "./pages/about-us.page-module";
import { HomePageModule } from "./pages/home.page-module";
import { EmployeesPageModule } from "./pages/employees.page-module";
import { ContactUsPageModule } from "./pages/contact-us.page-module";
import { OurProjectsPageModule } from "./pages/our-projects.page-module";
import { AdminPageModule } from "./pages/admin.page-module";
import { FormPageModule } from './pages/form.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';

const routes: Routes = [
  {
    path: "o-nas",
    loadChildren: () => AboutUsPageModule,
  },

  {
    path: "",
    loadChildren: () => HomePageModule,
  },

  {
    path: "pracownik",
    loadChildren: () => EmployeesPageModule,
  },
  {
    path: "pracownik",
    loadChildren: () => EmployeeDetailsPageModule,
  },
  {
    path: "kontakt",
    loadChildren: () => ContactUsPageModule,
  },
  {
    path: "projekty",
    loadChildren: () => OurProjectsPageModule,
  },
  {
    path: "admin",
    loadChildren: () => AdminPageModule,
  },
  { 
    path: 'form', 
    loadChildren: () => FormPageModule
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
