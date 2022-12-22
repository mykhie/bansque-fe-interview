import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from "../base/base.component";
import {Validators} from "@angular/forms";
import {ConversionModel} from "../../models/conversion-model";

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
