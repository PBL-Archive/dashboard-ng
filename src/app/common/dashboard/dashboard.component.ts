import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from '../common.service';
import { ChartsService } from '../../charts/charts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  type: string = 'table';
  data: any = [];

  constructor(
    private commonService: CommonService,
    private chartService: ChartsService
  ) {}

  ngOnInit(): void {
    this.getData().then(() => {
      this.data = this.commonService.data;
    });
  }

  async getData() {
    await this.commonService.RetrieveData();
    this.chartService.SetValues(this.commonService.data);
  }

  sendData(type: string) {
    this.type = type;
  }
}
