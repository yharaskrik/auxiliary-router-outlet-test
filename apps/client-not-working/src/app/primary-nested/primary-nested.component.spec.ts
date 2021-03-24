import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryNestedComponent } from './primary-nested.component';

describe('PrimaryNestedComponent', () => {
  let component: PrimaryNestedComponent;
  let fixture: ComponentFixture<PrimaryNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryNestedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
