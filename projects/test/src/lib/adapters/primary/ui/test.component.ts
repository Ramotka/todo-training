import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TestDTO } from '../../../application/ports/secondary/test.dto';
import { GETS_ALL_TEST_DTO, GetsAllTestDtoPort } from '../../../application/ports/secondary/gets-all-test.dto-port';

@Component({ selector: 'lib-test', templateUrl: './test.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TestComponent {
  test$: Observable<TestDTO[]> = this._getsAllTestDto.getAll();

  constructor(@Inject(GETS_ALL_TEST_DTO) private _getsAllTestDto: GetsAllTestDtoPort) {
  }
}
