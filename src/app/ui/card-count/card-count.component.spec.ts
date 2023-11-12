import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCountComponent } from './card-count.component';

describe('CardCountComponent', () => {
  let component: CardCountComponent;
  let fixture: ComponentFixture<CardCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCountComponent]
    });
    fixture = TestBed.createComponent(CardCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
