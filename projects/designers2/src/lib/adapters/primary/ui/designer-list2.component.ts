import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee2DTO } from '../../../application/ports/secondary/employee2.dto';
import { GETS_ALL_EMPLOYEE2_DTO, GetsAllEmployee2DtoPort } from '../../../application/ports/secondary/gets-all-employee2.dto-port';
import { CONTEXT_DTO_STORAGE, ContextDtoStoragePort } from '../../../application/ports/secondary/context-dto.storage-port';

@Component({
  selector: "lib-designer-list2",
  templateUrl: "./designer-list2.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignerList2Component {
  employees2$: Observable<Employee2DTO[]> = this._getsAllEmployee2Dto.getAll();

  constructor(
    @Inject(GETS_ALL_EMPLOYEE2_DTO)
    private _getsAllEmployee2Dto: GetsAllEmployee2DtoPort, @Inject(CONTEXT_DTO_STORAGE) private _contextDtoStorage: ContextDtoStoragePort
  ) {}

  onEmployeeClicked(employee: Employee2DTO): void {
    this._contextDtoStorage.next({ employeeId: employee.id});
  }
}
