import {Component, Injector, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CurrencyService} from "../../services/currency.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  public formGroupBuilder = new FormBuilder();
  private router: Router;
  protected activatedRoute: ActivatedRoute;
  public isLoading = false;
  protected currencyService: CurrencyService;
  protected toastr: ToastrService;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.activatedRoute = injector.get(ActivatedRoute);
    this.currencyService = injector.get(CurrencyService);
    this.toastr = injector.get(ToastrService);
  }

  ngOnInit(): void {
    this.updateCurrentPageTitle();
  }
  updateCurrentPageTitle(title = 'Currency Converter') {
    document.title = title;
  }

  isLoadingTrue() {
    this.isLoading = true;
  }
  isLoadingFalse() {
    this.isLoading = false;
  }
  showError(message = 'An error occured') {
    this.toastr.clear();
    this.toastr.error(message, 'Error');

  }
}
