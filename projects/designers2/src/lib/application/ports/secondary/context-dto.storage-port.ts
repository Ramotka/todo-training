import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ContextDTO } from './context.dto';

export const CONTEXT_DTO_STORAGE = new InjectionToken<ContextDtoStoragePort>('CONTEXT_DTO_STORAGE');

export interface ContextDtoStoragePort {
  next(item: Partial<ContextDTO | undefined>): void;
  asObservable(): Observable<ContextDTO>;
}


//void - zmiana stanu
//storage dziala w pamieci przegladarki, nic się nie zapisuje w firebase
//DTOporty sa po to, by zapisywac cos permanentnie dla wszystkich uzytkownikow w bazie danych lub odczytywać globalne dane mojej aplikacji np. z Firebase
