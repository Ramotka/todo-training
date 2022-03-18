import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'lib-employee-detail2', templateUrl: './employee-detail2.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class EmployeeDetail2Component {
    params$ = this._activatedRoute.params;
    constructor(private _activatedRoute: ActivatedRoute) {}
}
