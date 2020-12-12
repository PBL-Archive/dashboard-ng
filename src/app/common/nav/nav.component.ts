import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }
  
  toggle() {
    this.commonService.ToggleSidebar("nav");
  }

}
