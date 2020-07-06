import { Component, OnInit, Input } from '@angular/core';

import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Random Data'
      },
      subtitle: {
        text: 'Source: Wikipedia.org'
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: true,
      },
      exporting: {
        enabled: true,
      },
      series: this.data,
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
