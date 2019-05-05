import { Component, OnInit } from '@angular/core';
import {StockDataService} from '../services/stock-data.service';
import {StockDataObject} from '../services/stock-data-interface';
import {MatDialog} from '@angular/material';
import {DetailComponent} from './detail/detail.component';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.scss']
})
export class StockDataComponent implements OnInit {
  stockData = {};
  dataSource: Array<StockDataObject> = [];
  displayedColumns: string[] = ['name', 'value', 'last price', 'change', 'graph'];
  loading = false;
  constructor(private stockDataService: StockDataService,
              private matDialog: MatDialog) {
    this.loading = true;
    stockDataService.messages.subscribe((msg) => {
      // console.log('Response from websocket in app', msg);
      this.saveCompleteData(msg);
      this.createData(msg);
    });
  }

  ngOnInit() {
  }

  saveCompleteData(data) {
    const keysArr = Object.keys(this.stockData);
    // console.log('keysArr is', keysArr);
    if (keysArr.length === 0) {
      this.setStockData(data);
    } else {
      for (let j = 0, jLen = data.length; j < jLen; j++) {
        const coName = data[j][0];
        if (keysArr.indexOf(coName) > -1) {
          this.stockData[coName].push(data[j][1]);
        } else {
          this.stockData[coName] = [data[j][1]];
        }
      }
    }
    // console.log('lets check final stock data', this.stockData);
  }

  setStockData(data) {
    for (let i = 0, iLen = data.length ; i < iLen; i ++) {
      const keyName = data[i][0];
      this.stockData[keyName] = [data[i][1]];
    }
  }

  getLastStockPrice(name) {
    // console.log('prev co is', name);
    const priceArr = this.stockData[name];
    const price = priceArr[priceArr.length - 2];
    return price ? price : 0;
  }

  getChangePercent(currPrice, lastPrice) {
    /*console.log('current price is', currPrice);
    console.log('last price is', lastPrice);*/
    const changeVal = currPrice - lastPrice;
    const changePercent = (changeVal / lastPrice) * 100;
    // console.log('change percent is', changePercent);
    return isFinite(changePercent) ? changePercent : '';
  }

  sendChartData(coName) {
    // console.log('coName is', coName);
    const keysArray = Object.keys(this.stockData);
    return keysArray.indexOf(coName) > -1 ? this.stockData[coName] : [];
  }

  createData(data) {
    // console.log('data in create data is', data);
    const dataArray = [];
    for (let i = 0, iLen = data.length; i < iLen; i++) {
      const obj = {
        name: data[i][0],
        value: data[i][1]
      };
      dataArray.push(obj);
    }
    this.dataSource = dataArray;
    this.loading = false;
    // console.log('final dataSource', this.dataSource);
  }

  rowClicked(row) {
    this.matDialog.open(DetailComponent, {
      width: '90%',
      data: {coName: row.name, dataArray: this.stockData[row.name]}
    });
  }

  canMeasurePerformance(coName) {
    const coDataArr = this.stockData[coName];
    return (coDataArr.length > 6 || coDataArr.length === 6);
  }
}
