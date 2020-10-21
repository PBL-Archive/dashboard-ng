import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { ChartsService } from '../charts.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges {
  @Input() tableData: string;
  data: any;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes Detected in Table');
    this.data = this.tableData;
  }
}
