import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-performance-measure',
  templateUrl: './performance-measure.component.html',
  styleUrls: ['./performance-measure.component.scss']
})
export class PerformanceMeasureComponent implements OnInit {
  @Input() dataArr = [];
  fiveDaysData = [];
  constructor() {
    setTimeout(() => {
      // console.log('dataArr in performance is', this.dataArr);
      this.setPerformanceChart(this.dataArr);
    }, 500);
  }

  ngOnInit() {
  }

  setPerformanceChart(data) {
    // console.log('data @##@', data);
    const reqData = data.reverse();
    // console.log('reversed data', reqData);
    for (let j = 0, jLen = reqData.length; j < jLen; j++) {
      if (j < 5) {
        const obj = {
          value: parseFloat(reqData[j].toFixed(2)),
          change: parseFloat((((reqData[j] - reqData[j + 1]) / reqData[j + 1]) * 100).toFixed(2))
        };
        this.fiveDaysData.push(obj);
      }
    }
    console.log('data object here is', this.fiveDaysData);
  }
}
