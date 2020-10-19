import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  type: string = 'table';
  data: any = [];

  constructor(
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getData().then(() => {
      this.data = this.commonService.data;
    })
  }

  async getData() {
    await this.commonService.RetrieveData();
  }
}
