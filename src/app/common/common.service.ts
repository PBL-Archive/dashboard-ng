import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  toggle: boolean = false;
  type:string = "table";

  constructor() { }

  ToggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    let sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    let sidebarItemText = document.getElementsByClassName('sidebarItemText') as HTMLCollectionOf<HTMLElement>;
    let sidebarItemText_Length = sidebarItemText.length;
    if (this.toggle) {
      sidebar.style.maxWidth = "56px";
      sidebarToggleBtn.innerHTML = "☰";
      for (let i = 0; i < sidebarItemText_Length; i++) {
        let item = sidebarItemText[i];
        item.style.display = "none";
      }
      this.toggle = !this.toggle;
    } else {
      sidebar.style.maxWidth = "320px";
      sidebarToggleBtn.innerHTML = "✕";
      for (let i = 0; i < sidebarItemText_Length; i++) {
        let item = sidebarItemText[i];
        item.style.display = "block";
      }
      this.toggle = !this.toggle;
    }
  }

  SwitchChartType(type) {
    this.type = type;
  }

}
