import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ADDS_EMPLOYEE2_DTO, AddsEmployee2DtoPort } from '../../../application/ports/secondary/adds-employee2.dto-port';
import { Employee2DTO } from '../../../application/ports/secondary/employee2.dto';
import { GETS_ALL_EMPLOYEE2_DTO, GetsAllEmployee2DtoPort } from '../../../application/ports/secondary/gets-all-employee2.dto-port';

@Component({
  selector: "lib-create-employee",
  templateUrl: "./create-employee.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // styleUrls: ["./create-employee.component.scss"],
})
export class CreateEmployeeComponent {
  readonly createEmployeeForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
    bio: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    departmentName: new FormControl(),
    employeeCount: new FormControl('', [Validators.required]),
  });
  employeeList$: Observable<Employee2DTO[]> = this._getsAllEmployee2Dto.getAll();
  onCreateEmployeeFormSubmited(createEmployeeForm: FormGroup): void {
    if(createEmployeeForm.invalid)
    {
      alert('Uzupełnij puste pola');
      return;
    }
    this._addsEmployee2Dto.add({
      name: createEmployeeForm?.get('name')?.value,
      imageUrl: createEmployeeForm?.get('imageUrl')?.value,
      bio: createEmployeeForm?.get('bio')?.value,
      firstName: createEmployeeForm?.get('firstName')?.value,
      department: {
        name: createEmployeeForm?.get('departmentName')?.value,
        employeeCount: createEmployeeForm?.get('employeeCount')?.value,
      },
    });
    this.createEmployeeForm.reset();
  }
  constructor(
    @Inject(ADDS_EMPLOYEE2_DTO) private _addsEmployee2Dto: AddsEmployee2DtoPort, @Inject(GETS_ALL_EMPLOYEE2_DTO) private _getsAllEmployee2Dto: GetsAllEmployee2DtoPort
  ) {}
}


