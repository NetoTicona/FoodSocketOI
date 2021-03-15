import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizitaOrdenesComponent } from './pizita-ordenes.component';

describe('PizitaOrdenesComponent', () => {
  let component: PizitaOrdenesComponent;
  let fixture: ComponentFixture<PizitaOrdenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizitaOrdenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizitaOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
