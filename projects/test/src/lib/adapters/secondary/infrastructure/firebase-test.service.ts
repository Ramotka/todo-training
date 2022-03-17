import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTestDtoPort } from '../../../application/ports/secondary/gets-all-test.dto-port';
import { TestDTO } from '../../../application/ports/secondary/test.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseTestService implements GetsAllTestDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<TestDTO>): Observable<TestDTO[]> {
    return this._client.collection<TestDTO>('designers-list').valueChanges(({idField: 'id'})).pipe(map((data: TestDTO[]) => filterByCriterion(data, criterion)));
  }
}
