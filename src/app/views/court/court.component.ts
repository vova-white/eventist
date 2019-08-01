import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';

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
    console.log(e);
    this.isArea = e;
  }
}
