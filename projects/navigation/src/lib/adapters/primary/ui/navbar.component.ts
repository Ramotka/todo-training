import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Observable, of } from "rxjs";
import { NavbarDTO } from "../../../application/ports/secondary/navbar.dto";

@Component({
  selector: "lib-navbar",
  templateUrl: "./navbar.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  navbars$: Observable<NavbarDTO[]> = of ([
    {
      id: "1",
      link: "/",
      nav: "Home",
    },
    {
      id: "2",
      link: "/o-nas",
      nav: "O nas",
    },
    {
      id: "3",
      link: "/pracownik",
      nav: "Pracownicy",
    },
    {
      id: "4",
      link: "/projekty",
      nav: "Projekty",
    },
    {
      id: "5",
      link: "/kontakt",
      nav: "Kontakt",
    },
    // {
    //   id: "7",
    //   link: "/form",
    //   nav: "Rejestracja",
    // },
    {
      id: "6",
      link: "/admin",
      nav: "AdminPage",
    },
  ])
}
