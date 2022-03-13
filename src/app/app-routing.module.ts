import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { HomePageModule } from './pages/home.page-module';
import { EmployeesPageModule } from './pages/employees.page-module';
// import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { ContactUsPageModule } from './pages/contact-us.page-module';
import { OurProjectsPageModule } from './pages/our-projects.page-module';
import { EmployeeDetailComponentModule } from 'projects/designers/src/public-api';

const routes: Routes = [{
  path: 'o-nas',
  loadChildren: () => AboutUsPageModule
},

{
  path: '',
  loadChildren: () => HomePageModule
},

  { 
        path: 'pracownik', 
        loadChildren: () => EmployeesPageModule
      },
  { 
        path: 'pracownik/:name', 
        loadChildren: () => EmployeeDetailComponentModule
      },
  { 
        path: 'kontakt', 
        loadChildren: () => ContactUsPageModule
      },
  { 
        path: 'projekty', 
        loadChildren: () => OurProjectsPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
