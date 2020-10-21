import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import Chart from 'chart.js';
import { ChartsService } from '../charts.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
})
export class LineComponent implements OnInit {
  @Input() lineData;
  data: any;
  canvas;
  ctx;

  constructor(private chartsService: ChartsService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes Detected in Line');
    // console.log(this.lineData);
    let founded_year = this.chartsService.founded_year
      .filter((x) => x !== '')
      .map(Number);
    // const min_founded_year = Math.min.apply(Math, founded_year);
    // const max_founded_year = Math.max(...founded_year);
    // var founded_year_array = Array.apply(null, {
    //   length: max_founded_year + 1 - min_founded_year,
    // }).map(function (_, idx) {
    //   return idx + min_founded_year;
    // });
    let result = this.FindCountForYears(founded_year);
    // console.log(result[0]);
    // console.log(result[1]);
    // console.log(founded_year);
    // console.log(founded_year_array);
    // console.log(min_founded_year);
    // console.log(max_founded_year);
    this.canvas = <HTMLCanvasElement>document.getElementById('linechart');
    this.ctx = this.canvas.getContext('2d');
    var linechart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: result[0],
        datasets: [
          {
            label: 'No. of startups founded each year',
            data: result[1],
          },
        ],
      },
    });
  }

  FindCountForYears(arr) {
    let year = [];
    let count = [];
    let prev;
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        year.push(arr[i]);
        count.push(1);
      } else {
        count[count.length - 1]++;
      }
      prev = arr[i];
    }
    return [year, count];
  }
}
