import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalCurrencyDataComponent } from './historical-currency-data.component';

describe('HistoricalCurrencyDataComponent', () => {
  let component: HistoricalCurrencyDataComponent;
  let fixture: ComponentFixture<HistoricalCurrencyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalCurrencyDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalCurrencyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
