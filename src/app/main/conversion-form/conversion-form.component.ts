import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {Validators} from "@angular/forms";
import {ConversionModel} from "../../models/conversion-model";
import {BaseComponent} from "../base/base.component";

@Component({
  selector: 'app-conversion-form',
  templateUrl: './conversion-form.component.html',
  styleUrls: ['./conversion-form.component.scss']
})
export class ConversionFormComponent extends BaseComponent {

  public conversionForm = this.formGroupBuilder.group(
    {
      amount: [1, [Validators.required]],
      to: ['', [Validators.required]],
      from: ['', [Validators.required]]
    }
  )
  submitted: boolean = false;
  currencyList: any;
  currencyDetails: any;
  isConverting: boolean = false;
  @Input() showMoreLink = true;
  @Input() fromCurrency: any = undefined;
  @Output() readonly conversionEmitter = new EventEmitter<any>();
  constructor(injector: Injector) {
    super(injector);
  }

  override ngOnInit(): void {
    this.getCurrencyList();
  }

  getConversion() {
    this.submitted = true;
    if (this.conversionForm.invalid) {
      return;
    }
    let data: ConversionModel = {
      amount: this.conversionFormControl['amount'].value,
      from: this.conversionFormControl['from'].value,
      to: this.conversionFormControl['to'].value,
    }
    this.isConverting = true;
    this.currencyService.getCurrencyConversion(data).subscribe(res => {
      this.isConverting = false;
      this.conversionEmitter.emit(res);
      this.currencyDetails = res;
    }, error => {
      this.showError(error?.message);
      this.isConverting = false;
    });
  }

  get conversionFormControl() {
    return this.conversionForm.controls;
  }

  getCurrencyList() {
    this.isLoadingTrue();
    this.currencyService.getCurrencyList().subscribe(res => {
      this.isLoadingFalse();
      this.currencyList = res;
    }, error => {
      this.showError(error?.message);
      this.isLoadingFalse();
    });
  }

  toggleCurrencies() {
    if (this.conversionFormControl['from'].invalid || this.conversionFormControl['to'].invalid) {
      this.showError('Please select both From and To currency');
    }
  }

}
