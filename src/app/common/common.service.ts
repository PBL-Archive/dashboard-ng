import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService implements OnInit {
  toggle: boolean = false;
  type: string = 'table';
  data: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }

  ToggleSidebar(load_type) {
    let sidebar = document.getElementById('sidebar');
    let sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    let sidebarItemText = document.getElementsByClassName('sidebarItemText') as HTMLCollectionOf<HTMLElement>;
    let sidebarItemText_Length = sidebarItemText.length;
    if (load_type == "first") {
      if (window.innerWidth < 992) {
        this.toggle = !this.toggle;
      }
    }
    if (this.toggle) {
      sidebar.style.maxWidth = '56px';
      sidebarToggleBtn.innerHTML = '☰';
      for (let i = 0; i < sidebarItemText_Length; i++) {
        let item = sidebarItemText[i];
        item.style.display = 'none';
      }
      this.toggle = !this.toggle;
    } else {
      sidebar.style.maxWidth = '240px';
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
    const dataTemp = await fetch('https://raw.githubusercontent.com/baijudodhia/dashboard-ng/gh-pages/assets/data/ivc_minified.json');
    this.data = await dataTemp.json();
  }
}
