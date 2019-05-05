import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss']
})
export class StockChartComponent implements OnInit {
  @Input() data = [];
  @Input() coName: string;
  options: any = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Over All Performance'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      valueDecimals: 2,
      valueSuffix: ' INR'
    },
    series: [
      {
        name: 'Line 1'
      }
    ]
  };
  constructor() {
    setTimeout(() => {
      this.setChart(this.data, this.coName);
    }, 500);
  }

  ngOnInit() {
  }

  setChart(data, name) {
    // console.log('data in set Chart is', data);
    this.options.series[0].name = name.toUpperCase();
    this.options.series[0].data = data;
    Highcharts.chart(this.coName, this.options);
  }
}
