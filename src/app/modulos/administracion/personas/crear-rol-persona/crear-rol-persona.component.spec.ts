import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRolPersonaComponent } from './crear-rol-persona.component';

describe('CrearRolPersonaComponent', () => {
  let component: CrearRolPersonaComponent;
  let fixture: ComponentFixture<CrearRolPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRolPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRolPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
