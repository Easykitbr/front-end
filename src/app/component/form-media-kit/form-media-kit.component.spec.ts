import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMediaKitComponent } from './form-media-kit.component';

describe('FormMediaKitComponent', () => {
  let component: FormMediaKitComponent;
  let fixture: ComponentFixture<FormMediaKitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormMediaKitComponent]
    });
    fixture = TestBed.createComponent(FormMediaKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
