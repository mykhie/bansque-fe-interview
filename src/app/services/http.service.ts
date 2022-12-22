import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {config} from "../constants/constants"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpClient: HttpClient;
  router: Router;

  constructor(injector: Injector) {
    this.httpClient = injector.get(HttpClient);
    this.router = injector.get(Router);
  }



  handleError(error: any): any {
    let errorMsg: string = this.returnHttpErrorMessage(error);
    return {
      code: error?.status,
      message: errorMsg
    };
  }

  returnHttpErrorMessage(error: any): string {


    if (error.error instanceof ErrorEvent) {
      return `Error: ${error.error.message}`;
    }

    if (error?.status.toString().startsWith("5")) {
      return config.SERVER_ERROR_FAILURE;
    }
    // you can include the error body
    switch (error?.status) {
      case 0: {
        return `A network related error occurred: ${error.message}`;
      }
      case 401: {
        return `${error.message}`;
      }
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `  ${error.message}`;
      }
    }
  }

}

