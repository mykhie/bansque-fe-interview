import {Component, Input, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions, ChartType} from "chart.js";
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-historical-currency-data',
  templateUrl: './historical-currency-data.component.html',
  styleUrls: ['./historical-currency-data.component.scss']
})
export class HistoricalCurrencyDataComponent implements OnInit {

  @Input() currencyFrom: string;
  @Input() currencyTo: string;


  public barChartColors: object[];
  chart: Chart<ChartType, string[], unknown>;

  constructor() {

  }

  ngOnInit() {
    this.barChartColors = [
      {backgroundColor: 'red'},
      {backgroundColor: 'green'},
    ];
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: this.currencyFrom,
            data: ['467', '576', '572', '79', '92','574', '573', '576'],
            backgroundColor: 'limegreen'
          },
          {
            label: this.currencyTo,
            data: ['542', '542', '536', '327', '17','0.00', '538', '541'],
            backgroundColor: 'orange'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

}
