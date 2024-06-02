import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPreviewComponent } from './trainer-preview.component';

describe('TrainerPreviewComponent', () => {
  let component: TrainerPreviewComponent;
  let fixture: ComponentFixture<TrainerPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerPreviewComponent]
    });
    fixture = TestBed.createComponent(TrainerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
