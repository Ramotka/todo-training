import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({ selector: 'lib-designers-list', templateUrl: './designers-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class DesignersListComponent {
    employee1: EmployeeDTO = {
        name: "Leon Kowalski",
        image: "https://ocdn.eu/pulscms-transforms/1/riDk9kpTURBXy9hYWZkOGM5MmE3YjgxNTU5ZjI4MzFmYWRjNDM0ODc0MC5qcGeSlQNgGs0DPc0B05MFzQFAzQFAgaEwBQ",
        alt: "Leon Kowalski",
        description: "Ukończył Studium Projektowania Wnętrz w Londynie. Posiada 7-letnie doświadczenie w branży. Jego pasją jest wystrój łazienek i powierzchni biurowych."
    }

    employee2: EmployeeDTO = {
        name: "Jadwiga Nowak",
        image: "https://www.economywatch.com/wp-content/uploads/2021/08/Nicole-Kidman-Bitcoin.jpg",
        alt: "Jadwiga Nowak",
        description: "Ukończyła Architekturę Wnętrz na Uniwersytecie Warszawskim. Posiada 10-letnie doświadczenie w branży. Specjalizuje się w projektowaniu kuchni."
    }

    employee3: EmployeeDTO = {
        name: "Jan Dokładny",
        image: "https://lb0.dstatic.pl/trendContent/38215_smallPicture_1.jpg",
        alt: "Jan Dokładny",
        description: "Absolwent Wydziału Architektury na Politechnice Wrocławskiej. Zajmuje się tworzeniem dokumentacji technicznej i zestawień."
    }
}
