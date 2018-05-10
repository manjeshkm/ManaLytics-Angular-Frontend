import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingKartComponent } from './billing-kart.component';

describe('BillingKartComponent', () => {
  let component: BillingKartComponent;
  let fixture: ComponentFixture<BillingKartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingKartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
