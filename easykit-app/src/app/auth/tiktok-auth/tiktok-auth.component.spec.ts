import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokAuthComponent } from './tiktok-auth.component';

describe('TiktokAuthComponent', () => {
  let component: TiktokAuthComponent;
  let fixture: ComponentFixture<TiktokAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiktokAuthComponent]
    });
    fixture = TestBed.createComponent(TiktokAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
