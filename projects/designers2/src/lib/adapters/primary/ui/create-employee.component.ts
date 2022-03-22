import { FormGroup, FormControl } from "@angular/forms";
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import {
  ADDS_EMPLOYEE2_DTO,
  AddsEmployee2DtoPort,
} from "../../../application/ports/secondary/adds-employee2.dto-port";

@Component({
  selector: "lib-create-employee",
  templateUrl: "./create-employee.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeComponent {
  readonly createEmployeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    imageUrl: new FormControl(),
    bio: new FormControl(),
    firstName: new FormControl(),
    department: new FormGroup({
      name: new FormControl(),
      employeeCount: new FormControl(),
    }),
  });



  onCreateEmployeeFormSubmited(createEmployeeForm: FormGroup): void {
    if(createEmployeeForm.invalid)
    {
      return;
    }
    this._addsEmployee2Dto.add(createEmployeeForm.getRawValue());
    this.createEmployeeForm.reset();
  }
  constructor(
    @Inject(ADDS_EMPLOYEE2_DTO) private _addsEmployee2Dto: AddsEmployee2DtoPort
  ) {}
}
