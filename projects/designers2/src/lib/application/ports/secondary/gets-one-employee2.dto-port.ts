import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee2DTO } from './employee2.dto';

export const GETS_ONE_EMPLOYEE2_DTO = new InjectionToken<GetsOneEmployee2DtoPort>('GETS_ONE_EMPLOYEE2_DTO');

export interface GetsOneEmployee2DtoPort {
  getOne(id: string): Observable<Employee2DTO>;
}
