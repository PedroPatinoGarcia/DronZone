import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoDronComponent } from './tipoDron.component';

describe('tipoDronComponentt', () => {
  let component: TipoDronComponent;
  let fixture: ComponentFixture<TipoDronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoDronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
