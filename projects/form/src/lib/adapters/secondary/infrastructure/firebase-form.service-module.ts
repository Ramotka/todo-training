import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ADDS_FORM_DTO } from '../../../application/ports/secondary/adds-form.dto-port';
import { FirebaseFormService } from './firebase-form.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseFormService,
	{ provide: ADDS_FORM_DTO, useExisting: FirebaseFormService}
	],
  	exports: [] })
export class FirebaseFormServiceModule {
}
