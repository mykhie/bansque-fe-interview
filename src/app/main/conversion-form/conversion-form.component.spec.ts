import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConversionFormComponent} from './conversion-form.component';
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule} from "ngx-toastr";
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {CurrencyService} from "../../services/currency.service";
import {ConversionModel} from "../../models/conversion-model";

describe('ConversionFormComponent', () => {
  let component: ConversionFormComponent;
  let fixture: ComponentFixture<ConversionFormComponent>;
  let submitEl: DebugElement;
  let currencyService: CurrencyService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversionFormComponent],
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
    currencyService = TestBed.inject(CurrencyService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEl = fixture.debugElement.query(By.css('button'))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Conversion button should be disabled if form is invalid', () => {
    fixture.detectChanges();
    if (component.conversionForm.invalid)
      expect(submitEl.nativeElement.disabled).toBeTrue();
    else
      expect(submitEl.nativeElement.disabled).toBeFalse();
  });
  it('On valid inputs, it should be able to submit the form', () => {
    let data: ConversionModel = {
      amount: 100,
      from: 'USD',
      to: 'GBP'
    };
    component.conversionForm.patchValue(data)
    component.getConversion();
    submitEl.triggerEventHandler('click', null);
    expect(component.formSubmitted).toBeTrue();
  });

  it('Should have title ', () => {
    fixture.componentInstance.ngOnInit();
    const compiled = fixture.debugElement.query(By.css('h4'));
    // more implementation for a mock up service to get the update title
    expect(compiled.nativeElement.textContent.length)
      .toBeGreaterThan(2);
  });
  it('Should toggle currency', () => {
    component.conversionFormControl['from'].setValue('USD');
    component.conversionFormControl['to'].setValue('GBP');
    component.toggleCurrencies();
    expect(component.conversionFormControl['from'].value).toEqual('GBP');
  })
  // more test for validations


});
