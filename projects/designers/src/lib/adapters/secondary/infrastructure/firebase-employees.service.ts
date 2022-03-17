import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GetsAllEmployeeDtoPort } from "../../../application/ports/secondary/gets-all-employee.dto-port";
import { EmployeeDTO } from "../../../application/ports/secondary/employee.dto";
import { filterByCriterion } from "@lowgular/shared";

@Injectable()
export class FirebaseEmployeesService implements GetsAllEmployeeDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<EmployeeDTO>): Observable<EmployeeDTO[]> {
    return this._client
      .collection<EmployeeDTO>("employees")
      .valueChanges({ idField: "id" })
      .pipe(map((data: EmployeeDTO[]) => filterByCriterion(data, criterion)));
  }
}
