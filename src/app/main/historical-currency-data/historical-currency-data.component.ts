import {Component, Injector, Input} from '@angular/core';
import {ChartType} from "chart.js";
import Chart from 'chart.js/auto';
import {BaseComponent} from "../base/base.component";

@Component({
  selector: 'app-historical-currency-data',
  templateUrl: './historical-currency-data.component.html',
  styleUrls: ['./historical-currency-data.component.scss']
})
export class HistoricalCurrencyDataComponent extends BaseComponent {

  @Input() currencyFrom: string;
  @Input() currencyTo: string;

  public labels: any[];
  chart: Chart<ChartType, string[], unknown>;
  public historicalData: any = undefined
  public dataSet: any = undefined
  public months: string[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  constructor(injector: Injector) {
    super(injector);
  }

  override ngOnInit() {
    this.historicalData = this.currencyService.getHistoricalData(this.currencyFrom, this.currencyTo);
    this.returnCalendarDays();
  }

  returnCalendarDays() {
    // this loads months
    this.labels = Object.keys(this.historicalData);
    this.labels = this.labels.map(mon => this.months[new Date(mon).getMonth()]);


    this.dataSet = [
      {
        label: this.currencyFrom,
        data: Object.values(this.historicalData).map(val => val[this.currencyFrom]),
        backgroundColor: 'limegreen'
      },
      {
        label: this.currencyTo,
        data: Object.values(this.historicalData).map(val => val[this.currencyTo]),
        backgroundColor: 'orange'
      },
    ]
    // create chart
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {
        labels: this.labels,
        datasets: this.dataSet
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

}
