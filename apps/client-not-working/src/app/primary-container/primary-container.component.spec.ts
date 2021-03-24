import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryContainerComponent } from './primary-container.component';

describe('PrimaryContainerComponent', () => {
  let component: PrimaryContainerComponent;
  let fixture: ComponentFixture<PrimaryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
