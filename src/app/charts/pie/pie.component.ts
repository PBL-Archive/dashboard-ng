import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js';
import { ChartsService } from '../charts.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  @Input() pieData;
  data: any;
  canvas;
  ctx;
  market;
  market_res;
  market_labels = [];
  market_values = [];
  market_bgcolor = [];
  status;
  status_res;
  status_labels = [];
  status_values = [];
  status_bgcolor = [];
  country;
  country_res;
  country_labels = [];
  country_values = [];
  country_bgcolor = [];
  state;
  state_res;
  state_labels = [];
  state_values = [];
  state_bgcolor = [];
  funding;
  funding_res;
  funding_labels = [];
  funding_values = [];
  funding_bgcolor = [];
  founding_year;
  founding_year_res;
  founding_year_labels = [];
  founding_year_values = [];
  founding_year_bgcolor = [];
  founding_month;
  founding_month_res;
  founding_month_labels = [];
  founding_month_values = [];
  founding_month_bgcolor = [];

  constructor(private chartsService: ChartsService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    this.market = this.chartsService.market.filter((x) => x !== '');
    this.market_res = this.CalculateFrequency(this.market);
    for (var key in this.market_res) {
      this.market_labels.push(key);
      this.market_values.push(this.market_res[key]);
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      this.market_bgcolor.push("rgb(" + r + "," + g + "," + b + ")");
    }
    this.DrawChart("market_pie", this.market_labels, this.market_bgcolor, this.market_values);
    this.status = this.chartsService.status.filter((x) => x !== '');
    this.status_res = this.CalculateFrequency(this.status);
    for (var key in this.status_res) {
      this.status_labels.push(key);
      this.status_values.push(this.status_res[key]);
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      this.status_bgcolor.push("rgb(" + r + "," + g + "," + b + ")");
    }
    this.DrawChart("status_pie", this.status_labels, this.status_bgcolor, this.status_values);
    this.country = this.chartsService.country_code.filter((x) => x !== '');
    this.country_res = this.CalculateFrequency(this.country);
    for (var key in this.country_res) {
      this.country_labels.push(key);
      this.country_values.push(this.country_res[key]);
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      this.country_bgcolor.push("rgb(" + r + "," + g + "," + b + ")");
    }
    this.DrawChart("country_pie", this.country_labels, this.country_bgcolor, this.country_values);
    this.state = this.chartsService.state_code.filter((x) => x !== '');
    this.state_res = this.CalculateFrequency(this.state);
    for (var key in this.state_res) {
      this.state_labels.push(key);
      this.state_values.push(this.state_res[key]);
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      this.state_bgcolor.push("rgb(" + r + "," + g + "," + b + ")");
    }
    this.DrawChart("state_pie", this.state_labels, this.state_bgcolor, this.state_values);
    this.funding = this.chartsService.funding_rounds.filter((x) => x !== '');
    this.funding_res = this.CalculateFrequency(this.funding);
    for (var key in this.funding_res) {
      this.funding_labels.push(key);
      this.funding_values.push(this.funding_res[key]);
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      this.funding_bgcolor.push("rgb(" + r + "," + g + "," + b + ")");
    }
    this.DrawChart("funding_pie", this.funding_labels, this.funding_bgcolor, this.funding_values);
    this.founding_year = this.chartsService.founded_year.filter((x) => x !== '');
    this.founding_year_res = this.CalculateFrequency(this.founding_year);
    for (var key in this.founding_year_res) {
      this.founding_year_labels.push(key);
      this.founding_year_values.push(this.founding_year_res[key]);
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      this.founding_year_bgcolor.push("rgb(" + r + "," + g + "," + b + ")");
    }
    this.DrawChart("founding_year_pie", this.founding_year_labels, this.founding_year_bgcolor, this.founding_year_values);
    this.founding_month = this.chartsService.founded_month.filter((x) => x !== '');
    this.founding_month = this.founding_month.map((x) => x.slice(-2));
    this.founding_month_res = this.CalculateFrequency(this.founding_month);
    for (var key in this.founding_month_res) {
      this.founding_month_labels.push(key);
      this.founding_month_values.push(this.founding_month_res[key]);
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      this.founding_month_bgcolor.push("rgb(" + r + "," + g + "," + b + ")");
    }
    this.DrawChart("founding_month_pie", this.founding_month_labels, this.founding_month_bgcolor, this.founding_month_values);
  }

  DrawChart(chart_name, labels, bgcolor, values) {
    let canvas = <HTMLCanvasElement>document.getElementById(chart_name);
    let ctx = canvas.getContext('2d');
    var chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          backgroundColor: bgcolor,
          data: values
        }]
      },
      options: {
        aspectRatio: 1.5,
        responsive: true,
        legend: {
          display: false
        },
        title: chart_name,
        layout: {
          padding: {
            left: 12,
            right: 12,
            top: 12,
            bottom: 12,
          },
          margin: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }
        },
      }
    });
    // let status_canvas = <HTMLCanvasElement>document.getElementById('status_pie');
    // let status_ctx = status_canvas.getContext('2d');
    // var status_chart = new Chart(status_ctx, {
    //   type: 'pie',
    //   data: {
    //     labels: this.status_labels,
    //     datasets: [{
    //       backgroundColor: this.status_bgcolor,
    //       data: this.status_values
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     legend: {
    //       display: false
    //     }
    //   }
    // });
    // let country_canvas = <HTMLCanvasElement>document.getElementById('country_pie');
    // let country_ctx = country_canvas.getContext('2d');
    // var country_chart = new Chart(country_ctx, {
    //   type: 'pie',
    //   data: {
    //     labels: this.country_labels,
    //     datasets: [{
    //       backgroundColor: this.country_bgcolor,
    //       data: this.country_values
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     legend: {
    //       display: false
    //     }
    //   }
    // });
    // let state_canvas = <HTMLCanvasElement>document.getElementById('state_pie');
    // let state_ctx = state_canvas.getContext('2d');
    // var state_chart = new Chart(state_ctx, {
    //   type: 'pie',
    //   data: {
    //     labels: this.state_labels,
    //     datasets: [{
    //       backgroundColor: this.state_bgcolor,
    //       data: this.state_values
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     legend: {
    //       display: false
    //     }
    //   }
    // });
    // let funding_canvas = <HTMLCanvasElement>document.getElementById('funding_pie');
    // let funding_ctx = funding_canvas.getContext('2d');
    // var funding_chart = new Chart(funding_ctx, {
    //   type: 'pie',
    //   data: {
    //     labels: this.funding_labels,
    //     datasets: [{
    //       backgroundColor: this.funding_bgcolor,
    //       data: this.funding_values
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     legend: {
    //       display: false
    //     }
    //   }
    // });
    // let founding_year_canvas = <HTMLCanvasElement>document.getElementById('founding_year_pie');
    // let founding_year_ctx = founding_year_canvas.getContext('2d');
    // var founding_year_chart = new Chart(founding_year_ctx, {
    //   type: 'pie',
    //   data: {
    //     labels: this.founding_year_labels,
    //     datasets: [{
    //       backgroundColor: this.founding_year_bgcolor,
    //       data: this.founding_year_values
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     legend: {
    //       display: false
    //     }
    //   }
    // });
    // let founding_month_canvas = <HTMLCanvasElement>document.getElementById('founding_month_pie');
    // let founding_month_ctx = founding_month_canvas.getContext('2d');
    // var founding_month_chart = new Chart(founding_month_ctx, {
    //   type: 'pie',
    //   data: {
    //     labels: this.founding_month_labels,
    //     datasets: [{
    //       backgroundColor: this.founding_month_bgcolor,
    //       data: this.founding_month_values
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     legend: {
    //       display: false
    //     }
    //   }
    // });
  }

  CalculateFrequency(e) {
    let length = e.length;
    let result = {};
    for (let i = 0; i < length; i++) {
      if (!result[e[i]]) {
        result[e[i]] = 0;
      }
      result[e[i]] += 1;
    }
    return result;
  }

}
