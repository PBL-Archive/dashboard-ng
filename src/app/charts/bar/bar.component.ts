import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import Chart from 'chart.js';
import { ChartsService } from '../charts.service';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input() barData;
  data: any;
  canvas;
  ctx;

  constructor(private chartsService: ChartsService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    let funding_total = this.chartsService.funding_total_usd.map(Number);
    let founded_year = this.chartsService.founded_year.map(Number);
    let founded_month = this.chartsService.founded_month.map(x => x.slice(-2)).map(Number);
    let founded_quarter = this.chartsService.founded_quarter.map(x => x.slice(-2));

    let founded_year_LENGTH = founded_year.length;
    let founded_month_LENGTH = founded_month.length;
    let founded_quarter_LENGTH = founded_quarter.length;

    let year_vs_startupsfounded_YEAR = [];
    let year_vs_startupsfounded_STARTUPSFOUNDED = [];
    let year_vs_startupsfounded_BGCOLOR = [];
    let year_vs_startupsfounded_BORDER = [];
    let year_vs_startupsfounded = {
      year: Number,
    };
    for (let i = 0; i < founded_year_LENGTH; i++) {
      if (founded_year[i] != 0) {
        if (!year_vs_startupsfounded[founded_year[i]]) {
          year_vs_startupsfounded[founded_year[i]] = 0;
        }
        year_vs_startupsfounded[founded_year[i]]++;
      }
    }
    for (var key in year_vs_startupsfounded) {
      year_vs_startupsfounded_YEAR.push(key);
      year_vs_startupsfounded_STARTUPSFOUNDED.push(year_vs_startupsfounded[key]);
      let color = this.getBackgroundColor();
      year_vs_startupsfounded_BGCOLOR.push(color[0]);
      year_vs_startupsfounded_BORDER.push(color[1]);
    }
    this.DisplayBarGraph("year_vs_startupsfounded", "Year v/s No. of Startups Founded", year_vs_startupsfounded_YEAR, year_vs_startupsfounded_STARTUPSFOUNDED, year_vs_startupsfounded_BGCOLOR, year_vs_startupsfounded_BORDER);

    let year_vs_totalfunding_YEAR = [];
    let year_vs_totalfunding_FUND = [];
    let year_vs_totalfunding_BGCOLOR = [];
    let year_vs_totalfunding_BORDER = [];
    let year_vs_totalfunding = {
      year: Number,
    }
    for (let i = 0; i < founded_year_LENGTH; i++) {
      if ((founded_year[i] != 0) && (funding_total[i] > 0)) {
        if (!year_vs_totalfunding[founded_year[i]]) {
          year_vs_totalfunding[founded_year[i]] = 0;
        }
        year_vs_totalfunding[founded_year[i]] += funding_total[i];
      }
    }
    for (var key in year_vs_totalfunding) {
      year_vs_totalfunding_YEAR.push(key);
      year_vs_totalfunding_FUND.push(year_vs_totalfunding[key]);
      let color = this.getBackgroundColor();
      year_vs_totalfunding_BGCOLOR.push(color[0]);
      year_vs_totalfunding_BORDER.push(color[1]);
    }
    this.DisplayBarGraph("year_vs_totalfunding", "Year v/s Total Funding (in USD)", year_vs_totalfunding_YEAR, year_vs_totalfunding_FUND, year_vs_totalfunding_BGCOLOR, year_vs_totalfunding_BORDER);

    let quarter_vs_startupsfounded_YEAR = [];
    let quarter_vs_startupsfounded_STARTUPSFOUNDED = [];
    let quarter_vs_startupsfounded_BGCOLOR = [];
    let quarter_vs_startupsfounded_BORDER = [];
    let quarter_vs_startupsfounded = {
      quarter: Number,
    }
    for (let i = 0; i < founded_quarter_LENGTH; i++) {
      if (founded_quarter[i] != "") {
        if (!quarter_vs_startupsfounded[founded_quarter[i]]) {
          quarter_vs_startupsfounded[founded_quarter[i]] = 0;
        }
        quarter_vs_startupsfounded[founded_quarter[i]]++;
      }
    }
    let quarter_vs_startupsfounded_SORTED = {
      'Q1': quarter_vs_startupsfounded['Q1'],
      'Q2': quarter_vs_startupsfounded['Q2'],
      'Q3': quarter_vs_startupsfounded['Q3'],
      'Q4': quarter_vs_startupsfounded['Q4'],
    }
    for (var key in quarter_vs_startupsfounded_SORTED) {
      quarter_vs_startupsfounded_YEAR.push(key);
      quarter_vs_startupsfounded_STARTUPSFOUNDED.push(quarter_vs_startupsfounded_SORTED[key]);
      let color = this.getBackgroundColor();
      quarter_vs_startupsfounded_BGCOLOR.push(color[0]);
      quarter_vs_startupsfounded_BORDER.push(color[1]);
    }
    this.DisplayBarGraph("quarter_vs_startupsfounded", "Quarter v/s No. of Startups Founded", quarter_vs_startupsfounded_YEAR, quarter_vs_startupsfounded_STARTUPSFOUNDED, quarter_vs_startupsfounded_BGCOLOR, quarter_vs_startupsfounded_BORDER);

    let quarter_vs_totalfunding_YEAR = [];
    let quarter_vs_totalfunding_FUND = [];
    let quarter_vs_totalfunding_BGCOLOR = [];
    let quarter_vs_totalfunding_BORDER = [];
    let quarter_vs_totalfunding = {
      quarter: Number,
    }
    for (let i = 0; i < founded_quarter_LENGTH; i++) {
      if ((founded_quarter[i] != "") && (funding_total[i] > 0)) {
        if (!quarter_vs_totalfunding[founded_quarter[i]]) {
          quarter_vs_totalfunding[founded_quarter[i]] = 0;
        }
        quarter_vs_totalfunding[founded_quarter[i]] += funding_total[i];
      }
    }
    let quarter_vs_totalfunding_SORTED = {
      'Q1': quarter_vs_totalfunding['Q1'],
      'Q2': quarter_vs_totalfunding['Q2'],
      'Q3': quarter_vs_totalfunding['Q3'],
      'Q4': quarter_vs_totalfunding['Q4'],
    }
    for (var key in quarter_vs_totalfunding_SORTED) {
      quarter_vs_totalfunding_YEAR.push(key);
      quarter_vs_totalfunding_FUND.push(quarter_vs_totalfunding_SORTED[key]);
      let color = this.getBackgroundColor();
      quarter_vs_totalfunding_BGCOLOR.push(color[0]);
      quarter_vs_totalfunding_BORDER.push(color[1]);
    }
    this.DisplayBarGraph("quarter_vs_totalfunding", "Quarter v/s Total Funding", quarter_vs_totalfunding_YEAR, quarter_vs_totalfunding_FUND, quarter_vs_totalfunding_BGCOLOR, quarter_vs_totalfunding_BORDER);

    let month_vs_startupsfounded_YEAR = [];
    let month_vs_startupsfounded_STARTUPSFOUNDED = [];
    let month_vs_startupsfounded_BGCOLOR = [];
    let month_vs_startupsfounded_BORDER = [];
    let month_vs_startupsfounded = {
      month: Number,
    };
    for (let i = 0; i < founded_month_LENGTH; i++) {
      if (founded_month[i] != "") {
        if (!month_vs_startupsfounded[founded_month[i]]) {
          month_vs_startupsfounded[founded_month[i]] = 0;
        }
        month_vs_startupsfounded[founded_month[i]]++;
      }
    }
    let month_vs_startupsfounded_SORTED = {
      'January': month_vs_startupsfounded['1'],
      'February': month_vs_startupsfounded['2'],
      'March': month_vs_startupsfounded['3'],
      'April': month_vs_startupsfounded['4'],
      'May': month_vs_startupsfounded['5'],
      'June': month_vs_startupsfounded['6'],
      'July': month_vs_startupsfounded['7'],
      'August': month_vs_startupsfounded['8'],
      'September': month_vs_startupsfounded['9'],
      'October': month_vs_startupsfounded['10'],
      'November': month_vs_startupsfounded['11'],
      'December': month_vs_startupsfounded['12'],
    }
    for (var key in month_vs_startupsfounded_SORTED) {
      month_vs_startupsfounded_YEAR.push(key);
      month_vs_startupsfounded_STARTUPSFOUNDED.push(month_vs_startupsfounded_SORTED[key]);
      let color = this.getBackgroundColor();
      month_vs_startupsfounded_BGCOLOR.push(color[0]);
      month_vs_startupsfounded_BORDER.push(color[1]);
    }
    this.DisplayBarGraph("month_vs_startupsfounded", "Month v/s Total Funding", month_vs_startupsfounded_YEAR, month_vs_startupsfounded_STARTUPSFOUNDED, month_vs_startupsfounded_BGCOLOR, month_vs_startupsfounded_BORDER);

    let month_vs_totalfunding_YEAR = [];
    let month_vs_totalfunding_FUND = [];
    let month_vs_totalfunding_BGCOLOR = [];
    let month_vs_totalfunding_BORDER = [];
    let month_vs_totalfunding = {
      month: Number,
    }
    for (let i = 0; i < founded_month_LENGTH; i++) {
      if ((founded_month[i] != "") && (funding_total[i] > 0)) {
        if (!month_vs_totalfunding[founded_month[i]]) {
          month_vs_totalfunding[founded_month[i]] = 0;
        }
        month_vs_totalfunding[founded_month[i]] += funding_total[i];
      }
    }
    let month_vs_totalfunding_SORTED = {
      'January': month_vs_totalfunding['1'],
      'February': month_vs_totalfunding['2'],
      'March': month_vs_totalfunding['3'],
      'April': month_vs_totalfunding['4'],
      'May': month_vs_totalfunding['5'],
      'June': month_vs_totalfunding['6'],
      'July': month_vs_totalfunding['7'],
      'August': month_vs_totalfunding['8'],
      'September': month_vs_totalfunding['9'],
      'October': month_vs_totalfunding['10'],
      'November': month_vs_totalfunding['11'],
      'December': month_vs_totalfunding['12'],
    }
    for (var key in month_vs_totalfunding_SORTED) {
      month_vs_totalfunding_YEAR.push(key);
      month_vs_totalfunding_FUND.push(month_vs_totalfunding_SORTED[key]);
      let color = this.getBackgroundColor();
      month_vs_totalfunding_BGCOLOR.push(color[0]);
      month_vs_totalfunding_BORDER.push(color[1]);
    }
    this.DisplayBarGraph("month_vs_totalfunding", "Month v/s Total Funding", month_vs_totalfunding_YEAR, month_vs_totalfunding_FUND, month_vs_totalfunding_BGCOLOR, month_vs_totalfunding_BORDER);
  }

  getBackgroundColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return ["rgba(" + r + "," + g + "," + b + "," + "0.5) ", "rgb(" + r + ", " + g + ", " + b + ")"];
  }

  DisplayBarGraph(chart, title, labels, data, bgcolor, bordercolor) {
    this.canvas = <HTMLCanvasElement>document.getElementById(chart);
    this.ctx = this.canvas.getContext('2d');
    var chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          backgroundColor: bgcolor,
          borderColor: bordercolor,
          borderWidth: 1,
          label: title,
          data: data,
        }],
      },
    });
  }

}
