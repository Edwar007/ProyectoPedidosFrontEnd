import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacion2Component } from './barra-navegacion2.component';

describe('BarraNavegacion2Component', () => {
  let component: BarraNavegacion2Component;
  let fixture: ComponentFixture<BarraNavegacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacion2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
