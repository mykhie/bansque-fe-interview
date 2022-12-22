import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../base/base.component";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent extends BaseComponent implements OnInit{



  override ngOnInit(): void {
    this.updateCurrentPageTitle('Page not found');
  }

}
