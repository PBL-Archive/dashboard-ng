import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService implements OnInit {
  toggle: boolean = false;
  type: string = 'table';
  data: any = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  ToggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    let sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    let sidebarItemText = document.getElementsByClassName(
      'sidebarItemText'
    ) as HTMLCollectionOf<HTMLElement>;
    let sidebarItemText_Length = sidebarItemText.length;
    if (this.toggle) {
      sidebar.style.maxWidth = '56px';
      sidebarToggleBtn.innerHTML = '☰';
      for (let i = 0; i < sidebarItemText_Length; i++) {
        let item = sidebarItemText[i];
        item.style.display = 'none';
      }
      this.toggle = !this.toggle;
    } else {
      sidebar.style.maxWidth = '280px';
      sidebarToggleBtn.innerHTML = '✕';
      for (let i = 0; i < sidebarItemText_Length; i++) {
        let item = sidebarItemText[i];
        item.style.display = 'block';
      }
      this.toggle = !this.toggle;
    }
  }

  SwitchChartType(type) {
    this.type = type;
  }

  async RetrieveData() {
    const dataTemp = await fetch('http://localhost:4200/assets/data/ivc_minified.json');
    this.data = await dataTemp.json();
  }
}
