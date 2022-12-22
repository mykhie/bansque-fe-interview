import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from "../base/base.component";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent {

  conversionForm = this.formGroupBuilder.group(
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

  constructor(injector: Injector) {
    super(injector);
  }

  override ngOnInit(): void {
    // this.getCurrencyList();
  }

  getConversion() {

    this.submitted = true;
    if (this.conversionForm.invalid) {
      return;
    }
    let data = {
      amount: this.conversionFormControl['amount'].value,
      from: this.conversionFormControl['from'].value,
      to: this.conversionFormControl['to'].value,
    }
    this.isConverting = true;
    this.currencyService.getCurrencyList().subscribe(res => {
      this.isConverting = false;
      console.log(res)
      this.currencyList = res;
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
      console.log(res)
      this.currencyList = res;
    }, error => {
      this.showError(error?.message);
      this.isLoadingFalse();
    });
  }

  protected showError(message: any) {

  }
}
