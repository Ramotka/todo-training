import { NgModule } from "@angular/core";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FirebaseEmployees2Service } from "./firebase-employees2.service";
import { GETS_ALL_EMPLOYEE2_DTO } from "../../../application/ports/secondary/gets-all-employee2.dto-port";
import { ADDS_EMPLOYEE2_DTO } from "../../../application/ports/secondary/adds-employee2.dto-port";
import { GETS_ONE_EMPLOYEE2_DTO } from "../../../application/ports/secondary/gets-one-employee2.dto-port";

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseEmployees2Service,
    { provide: GETS_ALL_EMPLOYEE2_DTO, useExisting: FirebaseEmployees2Service },
	  { provide: ADDS_EMPLOYEE2_DTO, useExisting: FirebaseEmployees2Service },
    { provide: GETS_ONE_EMPLOYEE2_DTO, useExisting: FirebaseEmployees2Service },
  ],
  exports: [],
})
export class FirebaseEmployees2ServiceModule {}
