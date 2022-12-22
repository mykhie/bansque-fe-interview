import {Injectable, Injector} from '@angular/core';
import {HttpService} from "./http.service";
import {environment} from "../../environments/environment";
import {catchError, map, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends HttpService {

  constructor(injector: Injector) {
    super(injector);
  }

  getCurrencyConversion(to: string, from: string, amount: number): any {
    return this.httpClient.get<any>(`${environment.apiUrl}/convert?to=${to}&from=${from}$amount=${amount}`).pipe(map(res => {
      return res;
    }))
      .pipe(
        catchError(error => {
          return throwError(() => this.handleError(error));
        })
      );
  }

}
