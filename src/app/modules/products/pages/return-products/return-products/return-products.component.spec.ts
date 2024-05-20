import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnProductsComponent } from './return-products.component';

describe('ReturnProductsComponent', () => {
  let component: ReturnProductsComponent;
  let fixture: ComponentFixture<ReturnProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnProductsComponent]
    });
    fixture = TestBed.createComponent(ReturnProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
