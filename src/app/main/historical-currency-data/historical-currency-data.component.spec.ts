import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HistoricalCurrencyDataComponent} from './historical-currency-data.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";

describe('HistoricalCurrencyDataComponent', () => {
  let component: HistoricalCurrencyDataComponent;
  let fixture: ComponentFixture<HistoricalCurrencyDataComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [HistoricalCurrencyDataComponent],
      imports: [RouterTestingModule,HttpClientTestingModule, ToastrModule.forRoot()]
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
