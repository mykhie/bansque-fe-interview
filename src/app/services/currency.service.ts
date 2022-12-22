import {Injectable, Injector} from '@angular/core';
import {HttpService} from "./http.service";
import {environment} from "../../environments/environment";
import {BehaviorSubject, catchError, map, throwError} from "rxjs";
import {ConversionModel} from "../models/conversion-model";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends HttpService {
  formUpdates: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);

  constructor(injector: Injector) {
    super(injector);
  }

  getCurrencyConversion(data: ConversionModel): any {
    return this.httpClient.get<any>(`${environment.apiUrl}/convert?to=${data.to}&from=${data.from}&amount=${data.amount}`).pipe(map(res => {
      return res;
    }))
      .pipe(
        catchError(error => {
          return throwError(() => this.handleError(error));
        })
      );
  }

  getCurrencyList(): any {
    return this.httpClient.get<any>(`${environment.apiUrl}/symbols`).pipe(map(res => {

      return res?.symbols;
    }))
      .pipe(
        catchError(error => {
          return throwError(() => this.handleError(error));
        })
      );
  }

  updateConversionForm(formData: any) {
    this.formUpdates.next(formData);
  }
}
