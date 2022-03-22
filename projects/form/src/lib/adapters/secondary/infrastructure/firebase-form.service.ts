import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AddsFormDtoPort } from '../../../application/ports/secondary/adds-form.dto-port';
import { FormDTO } from '../../../application/ports/secondary/form.dto';

@Injectable()
export class FirebaseFormService implements AddsFormDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(form: Partial<FormDTO>): void {
    this._client.collection('forms').add(form);
  }
}
