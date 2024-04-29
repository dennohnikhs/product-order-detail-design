import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsCardComponent } from './order-details-card.component';

describe('OrderDetailsCardComponent', () => {
  let component: OrderDetailsCardComponent;
  let fixture: ComponentFixture<OrderDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetailsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
