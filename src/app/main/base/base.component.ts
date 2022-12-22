import {Component, Injector, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  public formGroupBuilder = new FormBuilder();
  private router: Router;
  private activatedRoute: ActivatedRoute;
  public isLoading = false;
  protected currencyService: CurrencyService;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.activatedRoute = injector.get(ActivatedRoute);
    this.currencyService = injector.get(CurrencyService);
  }

  ngOnInit(): void {
  }

  isLoadingTrue() {
    this.isLoading = true;
  }
  isLoadingFalse() {
    this.isLoading = false;
  }
}
