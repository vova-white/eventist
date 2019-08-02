import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-court',
  templateUrl: './court.component.html',
  styleUrls: ['./court.component.scss']
})
export class CourtComponent implements OnInit {
  activeTab = 'area';
  isArea = false;

  constructor() {}

  ngOnInit() {}

  switchTab(e, active) {
    e.preventDefault();

    this.activeTab = active;
  }
  onChangeArea(e) {
    this.isArea = e;
  }
}
