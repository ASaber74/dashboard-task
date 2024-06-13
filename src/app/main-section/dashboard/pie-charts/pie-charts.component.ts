import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent  {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptionsRecurring: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Recurring analysis',
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %<br>{point.name}',
        },
        innerSize: '60%',
      },
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'recurring',
            y: 42,
            color: '#7E57C2',
          },
          {
            name: '',
            y: 58,
            color: '#EDEDED',
          },
        ],
      },
    ],
  };

  chartOptionsAware: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Aware analysis',
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %<br>{point.name}',
        },
        innerSize: '60%',
      },
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'aware',
            y: 87,
            color: '#7E57C2',
          },
          {
            name: '',
            y: 13,
            color: '#EDEDED',
          },
        ],
      },
    ],
  };

}
