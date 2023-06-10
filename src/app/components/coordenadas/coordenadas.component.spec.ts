import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadasComponent } from './coordenadas.component';

describe('CoordenadasComponent', () => {
  let component: CoordenadasComponent;
  let fixture: ComponentFixture<CoordenadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordenadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
