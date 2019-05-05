import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatTableModule, MatChipsModule, MatDialogModule, MatIconModule, MatButtonModule, MatGridListModule,
  MatTooltipModule, MatProgressBarModule} from '@angular/material';
import {ChartModule} from 'angular-highcharts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StockDataComponent } from './stock-data/stock-data.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { DetailComponent } from './stock-data/detail/detail.component';
import { PerformanceMeasureComponent } from './stock-data/performance-measure/performance-measure.component';

@NgModule({
  declarations: [
    AppComponent,
    StockDataComponent,
    StockChartComponent,
    DetailComponent,
    PerformanceMeasureComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTableModule,
    ChartModule,
    MatChipsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatTooltipModule,
    MatProgressBarModule
  ],
  providers: [],
  entryComponents: [DetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
