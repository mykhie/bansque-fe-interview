import {
  Component,
  Injector
} from '@angular/core';
import {BaseComponent} from "../base/base.component";

@Component({
  selector: 'app-currency-page',
  templateUrl: './currency-page.component.html',
  styleUrls: ['./currency-page.component.scss']
})
export class CurrencyPageComponent extends BaseComponent {

  selectedFromCurrency: any = undefined;
  selectedToCurrency: any = undefined;
  currencyName: string = '';

  constructor(injector: Injector) {
    super(injector);
  }

  override ngOnInit(): void {
    // subscribe to a service
    this.activatedRoute.params.subscribe(e => {
      if (e['from']) {
        this.selectedFromCurrency = this.activatedRoute.snapshot.paramMap.get('from');
        this.selectedToCurrency = this.activatedRoute.snapshot.paramMap.get('to');
        this.updateFormPatchAndSubmit();
      }
    });

  }

  updateFormPatchAndSubmit() {
    let formData = {
      from: this.selectedFromCurrency,
      to: this.selectedToCurrency,
      amount: 100,
    };
    this.currencyService.updateConversionForm(formData);
  }

}
