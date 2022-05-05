import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAdmComponent } from './consulta-adm.component';

describe('ConsultaAdmComponent', () => {
  let component: ConsultaAdmComponent;
  let fixture: ComponentFixture<ConsultaAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
