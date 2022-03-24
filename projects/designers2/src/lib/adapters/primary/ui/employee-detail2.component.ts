import { ActivatedRoute } from "@angular/router";
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { Observable } from "rxjs";
import { Employee2DTO } from "../../../application/ports/secondary/employee2.dto";
import {
  GETS_ONE_EMPLOYEE2_DTO,
  GetsOneEmployee2DtoPort,
} from "../../../application/ports/secondary/gets-one-employee2.dto-port";

@Component({
  selector: "lib-employee-detail2",
  templateUrl: "./employee-detail2.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetail2Component {
  // params$ = this._activatedRoute.params;

  employee$: Observable<Employee2DTO> = this._getsOneEmployee2Dto.getOne(
    this._activatedRoute.snapshot.params.employeeId
);

  constructor(
    @Inject(GETS_ONE_EMPLOYEE2_DTO)
    private _getsOneEmployee2Dto: GetsOneEmployee2DtoPort,
    private _activatedRoute: ActivatedRoute
  ) {}
}
