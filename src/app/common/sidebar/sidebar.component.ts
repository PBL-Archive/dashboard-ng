import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() switchChartTypeEvent = new EventEmitter();

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.ToggleSidebar();
  }

  toggle() {
    this.commonService.ToggleSidebar();
  }

  switchChartType(type: string): void {
    this.switchChartTypeEvent.emit(type);
  }

}
