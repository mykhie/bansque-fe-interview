import {Component} from '@angular/core';
import {BaseComponent} from "../base/base.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent {
  arr = Array.from(Array(9).keys());
  currentConversionObject: any = undefined;

  updateCurrentConversionObject($evt: any) {
    this.currentConversionObject = $evt;
  }
}
