import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { CurrencyPageComponent } from './main/currency-page/currency-page.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BaseComponent } from './main/base/base.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrencyPageComponent,
    PageNotFoundComponent,
    BaseComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
