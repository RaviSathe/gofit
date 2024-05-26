import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymPreviewComponent } from './gym-preview.component';

describe('GymPreviewComponent', () => {
  let component: GymPreviewComponent;
  let fixture: ComponentFixture<GymPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymPreviewComponent]
    });
    fixture = TestBed.createComponent(GymPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
