import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateViewSectionComponent } from './create-view-section.component';

describe('CreateViewSectionComponent', () => {
  let component: CreateViewSectionComponent;
  let fixture: ComponentFixture<CreateViewSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateViewSectionComponent]
    });
    fixture = TestBed.createComponent(CreateViewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
