import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  type:string = "table";

  constructor() { }

  ngOnInit(): void {
  }

  sendData(type: string) {
    this.type = type;
  }

}
