import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Employee2DTO } from "../../../application/ports/secondary/employee2.dto";
import {
  GETS_ONE_EMPLOYEE2_DTO,
  GetsOneEmployee2DtoPort,
} from "../../../application/ports/secondary/gets-one-employee2.dto-port";
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from "../../../application/ports/secondary/context-dto.storage-port";
import { ContextDTO } from "../../../application/ports/secondary/context.dto";

@Component({
  selector: "lib-employee-detail2",
  templateUrl: "./employee-detail2.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetail2Component {
  employee$: Observable<Employee2DTO> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data: ContextDTO) => 
      this._getsOneEmployee2Dto.getOne(data.employeeId)));

  constructor(
    @Inject(GETS_ONE_EMPLOYEE2_DTO)
    private _getsOneEmployee2Dto: GetsOneEmployee2DtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort
  ) {}
}

// export class EmployeeDetail2Component {

//   employee$: Observable<Employee2DTO> = this._getsOneEmployee2Dto.getOne(
//     this._activatedRoute.snapshot.params.employeeId
//     // '9OPINmbiBIuSwKr9k9zC'
// );

//   constructor(
//     @Inject(GETS_ONE_EMPLOYEE2_DTO)
//     private _getsOneEmployee2Dto: GetsOneEmployee2DtoPort,
//     private _activatedRoute: ActivatedRoute
//   ) {}

