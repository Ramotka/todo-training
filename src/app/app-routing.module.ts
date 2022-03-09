import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { HomePageModule } from './pages/home.page-module';
import { EmployeesPageModule } from './pages/employees.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';

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
        loadChildren: () => EmployeeDetailsPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
