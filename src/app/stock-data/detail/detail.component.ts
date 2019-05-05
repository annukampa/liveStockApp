import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  stockData: any;
  constructor(private dialogRef: MatDialogRef<DetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.stockData = this.data.dataArray;
    console.log('data in detail component', data);
  }

  ngOnInit() {
  }

  getMaxPrice() {
    return _.max(this.stockData);
  }

  getMinPrice() {
    return _.min(this.stockData);
  }

  getCurrentPrice() {
    const dataLength = this.stockData.length;
    return this.stockData[dataLength - 1];
  }

  close() {
    this.dialogRef.close();
  }
}
