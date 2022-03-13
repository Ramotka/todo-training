import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectDTO } from '../../../application/ports/secondary/project.dto';

@Component({ selector: 'lib-projects-list', templateUrl: './projects-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ProjectsListComponent {
    projects$: Observable<ProjectDTO[]> = of ([
        {
            id: "1",
            name: "Projekt 1",
            alt: "Projekt 1",
            imageUrl: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        },
        {
            id: "2",
            name: "Projekt 2",
            alt: "Projekt 2",
            imageUrl: "https://images.pexels.com/photos/6587847/pexels-photo-6587847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
            id: "3",
            name: "Projekt 3",
            alt: "Projekt 3",
            imageUrl: "https://images.pexels.com/photos/3741314/pexels-photo-3741314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
    ]);
}
