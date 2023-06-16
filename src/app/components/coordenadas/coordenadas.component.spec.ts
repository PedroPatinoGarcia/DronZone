import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadaComponent } from './coordenadas.component';

describe('CoordenadasComponent', () => {
  let component: CoordenadaComponent;
  let fixture: ComponentFixture<CoordenadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordenadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
