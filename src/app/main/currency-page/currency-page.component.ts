import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, Injector, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from "../base/base.component";
import {ConversionFormComponent} from "../conversion-form/conversion-form.component";

@Component({
  selector: 'app-currency-page',
  templateUrl: './currency-page.component.html',
  styleUrls: ['./currency-page.component.scss']
})
export class CurrencyPageComponent extends BaseComponent{

  selectedFromCurrency: any = undefined;
  selectedToCurrency: any = undefined;

  @ViewChild(ConversionFormComponent) conversionFormComponent: ConversionFormComponent;

  constructor(injector: Injector) {
    super(injector);
  }

  override ngOnInit(): void {
    this.selectedFromCurrency = this.activatedRoute.snapshot.paramMap.get('from');
    this.selectedToCurrency = this.activatedRoute.snapshot.paramMap.get('to');

  }
  updateFormPatchAndSubmit() {
    this.conversionFormComponent.conversionForm.patchValue({
      from: this.selectedFromCurrency,
      to: this.selectedToCurrency,
      amount: 1,
    });
    this.conversionFormComponent.getConversion();
  }

}
