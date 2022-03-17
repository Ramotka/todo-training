import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseTestService } from './firebase-test.service';
import { GETS_ALL_TEST_DTO } from '../../../application/ports/secondary/gets-all-test.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTestService, { provide: GETS_ALL_TEST_DTO, useExisting: FirebaseTestService }],
  	exports: [] })
export class FirebaseTestServiceModule {
}
