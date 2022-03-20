import { InjectionToken } from '@angular/core';
import { Employee2DTO } from './employee2.dto';

export const ADDS_EMPLOYEE2_DTO = new InjectionToken<AddsEmployee2DtoPort>('ADDS_EMPLOYEE2_DTO');

export interface AddsEmployee2DtoPort {
  add(employee2: Partial<Employee2DTO>): void;
}
