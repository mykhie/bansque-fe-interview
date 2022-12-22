import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './main/page-not-found/page-not-found.component';
import {HomeComponent} from "./main/home/home.component";
import {CurrencyPageComponent} from "./main/currency-page/currency-page.component";


const routes: Routes = [


  {
    path: '', component: HomeComponent
  },
  {
    path: 'currency-details/:from/:to', component: CurrencyPageComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
