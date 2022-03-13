import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({ selector: 'lib-designers-list', templateUrl: './designers-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class DesignersListComponent {
    employees$: Observable<EmployeeDTO[]> = of([
        {
            id: "1",
            name: "Leon Kowalski",
            imageUrl: "https://ocdn.eu/pulscms-transforms/1/riDk9kpTURBXy9hYWZkOGM5MmE3YjgxNTU5ZjI4MzFmYWRjNDM0ODc0MC5qcGeSlQNgGs0DPc0B05MFzQFAzQFAgaEwBQ",
            alt: "Leon Kowalski",
            bio: "Ukończył Studium Projektowania Wnętrz w Londynie. Posiada 7-letnie doświadczenie w branży. Jego pasją jest wystrój łazienek i powierzchni biurowych.",
        },
        {
            id: "2",
            name: "Jadwiga Nowak",
            imageUrl: "https://www.economywatch.com/wp-content/uploads/2021/08/Nicole-Kidman-Bitcoin.jpg",
            alt: "Jadwiga Nowak",
            bio: "Ukończyła Architekturę Wnętrz na Uniwersytecie Warszawskim. Posiada 10-letnie doświadczenie w branży. Specjalizuje się w projektowaniu kuchni.",
        },
        {
            id: "3",
            name: "Jan Dokładny",
            imageUrl: "https://lb0.dstatic.pl/trendContent/38215_smallPicture_1.jpg",
            alt: "Jan Dokładny",
            bio: "Absolwent Wydziału Architektury na Politechnice Wrocławskiej. Zajmuje się tworzeniem dokumentacji technicznej i zestawień.",
        },

    ]);
}
