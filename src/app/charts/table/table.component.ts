import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges {
  @Input() tableData: string;
  data: any;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void { }

  getData() {
    this.data = this.commonService.data;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Changes Detected");
    this.data = this.tableData;
    console.log(this.data);
  }
}
