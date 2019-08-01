import { Component, OnInit, Input } from '@angular/core';
import { SimpleArrayItemCalc } from 'src/app/shared/models/simple-array-item-calc';

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

  isMinMax(item) {
    {
      return item instanceof SimpleArrayItemCalc;
    }
  }

  isInfinity(val) {
    return val === Infinity;
  }
}
