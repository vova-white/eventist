import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {
  @Input() title: string;
  @Input() data = [];

  constructor() {}

  ngOnInit() {}

  isObject(val) {
    {
      return typeof val === 'object';
    }
  }

  isInfinity(val) {
    return val === Infinity;
  }
}
