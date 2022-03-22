import { InjectionToken } from '@angular/core';
import { FormDTO } from './form.dto';

export const ADDS_FORM_DTO = new InjectionToken<AddsFormDtoPort>('ADDS_FORM_DTO');

export interface AddsFormDtoPort {
  add(form: Partial<FormDTO>): void;
}
