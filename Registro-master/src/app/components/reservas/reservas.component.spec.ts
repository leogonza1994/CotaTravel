import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserComponent } from './reservas.component';

describe('ReserComponent', () => {
  let component: ReserComponent;
  let fixture: ComponentFixture<ReserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
