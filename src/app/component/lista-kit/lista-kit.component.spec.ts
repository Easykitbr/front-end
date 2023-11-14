import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaKitComponent } from './lista-kit.component';

describe('ListaKitComponent', () => {
  let component: ListaKitComponent;
  let fixture: ComponentFixture<ListaKitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaKitComponent]
    });
    fixture = TestBed.createComponent(ListaKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
