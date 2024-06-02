import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTrainerComponent } from './about-trainer.component';

describe('AboutTrainerComponent', () => {
  let component: AboutTrainerComponent;
  let fixture: ComponentFixture<AboutTrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutTrainerComponent]
    });
    fixture = TestBed.createComponent(AboutTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
