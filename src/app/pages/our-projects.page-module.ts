import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OurProjectsPage } from './our-projects.page';
import { ProjectsListComponentModule } from '@projects';

@NgModule({ imports: [CommonModule, ProjectsListComponentModule, 
      RouterModule.forChild([
        {
          path: '',
          component: OurProjectsPage,
        }
      ]),
  ProjectsListComponentModule
],
  	declarations: [OurProjectsPage],
  	providers: [],
  	exports: [] })
export class OurProjectsPageModule {
}
