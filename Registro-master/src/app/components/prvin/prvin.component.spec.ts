import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvinComponent } from './prvin.component';

describe('PrvinComponent', () => {
  let component: PrvinComponent;
  let fixture: ComponentFixture<PrvinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrvinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrvinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
