import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ADDS_MESSAGE_DTO } from '../../../application/ports/secondary/adds-message.dto-port';
import { FirebaseMessagesService } from './firebase-messages.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseMessagesService,
		{ provide: ADDS_MESSAGE_DTO, useExisting: FirebaseMessagesService },
	],
  	exports: [] })
export class FirebaseMessagesServiceModule {
}
