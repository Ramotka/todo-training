import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TestDTO } from './test.dto';

export const GETS_ALL_TEST_DTO = new InjectionToken<GetsAllTestDtoPort>('GETS_ALL_TEST_DTO');

export interface GetsAllTestDtoPort {
  getAll(criterion?: Partial<TestDTO>): Observable<TestDTO[]>;
}
