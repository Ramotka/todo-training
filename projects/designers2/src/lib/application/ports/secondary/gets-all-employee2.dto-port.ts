import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee2DTO } from './employee2.dto';

export const GETS_ALL_EMPLOYEE2_DTO = new InjectionToken<GetsAllEmployee2DtoPort>('GETS_ALL_EMPLOYEE2_DTO');

export interface GetsAllEmployee2DtoPort {
  getAll(criterion?: Partial<Employee2DTO>): Observable<Employee2DTO[]>;
}
