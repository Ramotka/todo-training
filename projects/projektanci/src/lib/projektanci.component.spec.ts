import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektanciComponent } from './projektanci.component';

describe('ProjektanciComponent', () => {
  let component: ProjektanciComponent;
  let fixture: ComponentFixture<ProjektanciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektanciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektanciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
