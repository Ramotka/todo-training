import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GetsAllEmployee2DtoPort } from "../../../application/ports/secondary/gets-all-employee2.dto-port";
import { Employee2DTO } from "../../../application/ports/secondary/employee2.dto";
import { filterByCriterion } from "@lowgular/shared";
import { AddsEmployee2DtoPort } from "../../../application/ports/secondary/adds-employee2.dto-port";
import { GetsOneEmployee2DtoPort } from "../../../application/ports/secondary/gets-one-employee2.dto-port";

@Injectable()
export class FirebaseEmployees2Service
  implements
    GetsAllEmployee2DtoPort,
    AddsEmployee2DtoPort,
    GetsOneEmployee2DtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<Employee2DTO>): Observable<Employee2DTO[]> {
    return this._client
      .collection<Employee2DTO>("designers-list")
      .valueChanges({ idField: "id" })
      .pipe(
        map((data: any[]) =>
          data.map((employee) => ({
            name: employee.name,
            firstName: employee.firstName,
            bio: employee.bio,
            imageUrl: employee.imageUrl,
            id: employee.id,
            department: employee.department,
          }))
        ),
        map((data: Employee2DTO[]) => filterByCriterion(data, criterion))
      );
  }

  add(employee2: Partial<Employee2DTO>): void {
    this._client.collection("designers-list").add(employee2);
  }

  getOne(id: string): Observable<Employee2DTO> {
    return this._client
      .doc<Employee2DTO>("designers-list/" + id)
      .valueChanges({ idField: "id" }) as Observable<Employee2DTO>;
  }
}
