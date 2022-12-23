import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPageComponent } from './currency-page.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CurrencyService} from "../../services/currency.service";

describe('CurrencyPageComponent', () => {
  let component: CurrencyPageComponent;
  let fixture: ComponentFixture<CurrencyPageComponent>;
  let currencyService: CurrencyService;
  let toastrService: ToastrService;
  let httpClient: HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyPageComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    toastrService = TestBed.inject(ToastrService);
    httpClient = TestBed.inject(HttpClient);
    currencyService = TestBed.inject(CurrencyService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
